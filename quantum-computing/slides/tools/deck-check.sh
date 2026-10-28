#!/usr/bin/env bash
# Authoring check for one unit's deck, in headless Brave (or Chromium):
#   1. the deck's ?check=1 overflow test (deck-overflow.mjs)
#   2. every marked glossary term opens a definition; G, Esc and a slide link work
#   3. optional screenshots of chosen slides (reveal indices, 0-based; deck-shot.mjs) — taken even when 1 or 2 fail
#
# Exits 0 only if both checks passed: 1 if either failed or reported nothing.
#
#   slides/tools/deck-check.sh 01
#   slides/tools/deck-check.sh 01 4 7 10     # ... and screenshot slides 4, 7, 10 into $OUT
#
# Needs network (reveal and KaTeX come from cdnjs). Screenshots go to $OUT,
# default $TMPDIR/deck-check-<unit>. Keep that path short: the browser puts a unix
# socket in its profile directory, and a path over ~100 characters makes it exit silently.
set -euo pipefail
ROOT=$(cd "$(dirname "$0")/../.." && pwd)
unit=$(ls -d "$ROOT"/units/"$(printf %s "$1" | sed 's/^\([0-9]\)$/0\1/')"* | head -1)
shift
BROWSER=$(command -v brave || command -v chromium || command -v google-chrome-stable)
OUT=${OUT:-${TMPDIR:-/tmp}/deck-check-$(basename "$unit")}
mkdir -p "$OUT"
url="file://$unit/slides.html"

(cd "$ROOT" && ./qc glossary "$(basename "$unit" | cut -d- -f1)" >/dev/null)

echo "== overflow"
# deck-overflow exits 0 for "no overflow", 2 after printing the overflowing slides,
# and 1 (or 124 on timeout) when it measured nothing.
rc=0
timeout 150 node "$ROOT/slides/tools/deck-overflow.mjs" "$url" "$OUT" "$BROWSER" || rc=$?
case $rc in
  0) ;;
  2) echo "overflow: the slides above need fixing" ;;
  *) echo "no report (exit $rc): the deck did not finish loading, or the check timed out" ;;
esac

echo "== terms and keys"
# A failure here used to end the script under set -e, so the screenshots were never taken.
crc=0
timeout 150 node "$ROOT/slides/tools/deck-click.mjs" "$url" "$OUT" "$BROWSER" || crc=$?
[ "$crc" -eq 0 ] || echo "terms and keys: failed (exit $crc), see the report above"

rm -f "$OUT"/slide-*.png          # so a screenshot that was not taken is missing, not stale
if [ $# -gt 0 ]; then
  echo "== screenshots"
  # One page load, each slide captured over the DevTools protocol (deck-shot.mjs). The
  # browser's own --screenshot mode hung on these decks, and under set -e its timeout
  # ended the script.
  timeout 150 node "$ROOT/slides/tools/deck-shot.mjs" "$url" "$OUT" "$BROWSER" "$@" ||
    echo "screenshots: not all taken"
fi

[ "$rc" -eq 0 ] && [ "$crc" -eq 0 ]
