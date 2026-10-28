# Circuits and Power — course materials

`CURRICULUM.html` explains what the course covers and why; open it first.
`WHAT.md` says how far the build has got.

```fish
./cap slides 00         # a unit's deck in the browser
./cap problems 00       # its problem sheet: hints and worked solutions folded under each problem
./cap done 00           # record that you met its checkpoint
./cap status            # where you are
```

`./cap` is standard-library Python: nothing to install. The decks load
reveal.js and KaTeX from a CDN, so they need a network connection.

The course assumes Mechanics to Relativity through unit 24, and links to its
decks as `MR nn` at `../mechanics-to-relativity/`; those links work because the
two courses sit side by side in this repository, and on the published site.

`AUTHORING.md` is the contract every unit keeps — including the rule that
every fact is derived on the page or cited to a named source — and `BUILD.md`
is how units get built.
