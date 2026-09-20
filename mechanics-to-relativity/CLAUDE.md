# mechanics-to-relativity

A 41-unit self-study course, theoretical, from Newton's second law to Einstein's
field equations. `WHAT.md` is the state and the ordered next steps; read it
first. `AUTHORING.md` is the contract every unit keeps.

## The build is in progress, and it outlives sessions

Units are written and verified in batches by agent workflows. The build's
state is on disk (`BUILD-STATE.json`), and `./mr batch next` decides the next
step, so no session is special and any session can pick it up.

**When asked to continue, resume or keep building the course**, arm the loop
with exactly this line (invoke the `loop` skill with the text after `/loop`):

```
/loop 20m Continue building the mechanics-to-relativity course: follow BUILD.md "One tick"
```

and run one tick at once. The interval must be fixed — a cron job — and not
self-paced: the session quota runs out mid-build, a tick that dies on it must
not take the loop down with it, and only a cron keeps firing after a failed
turn. `BUILD.md` "One tick" is the whole procedure, including what to record
when a batch dies on the quota (`./mr batch blocked HH:MM`) so that later ticks
wait for the reset instead of burning tokens on a batch that cannot run.

Three things that follow:

- **"In flight" is not evidence of progress.** A batch whose agents have all hit
  the quota stays in flight and does nothing. `./mr batch next` checks when the
  run's transcripts were last written and exits 5 if they have gone quiet; trust
  that over the journal's `started` lines, and never tell the user a batch is
  progressing without it.
- **One batch at a time.** Two in flight exhaust the quota within the hour.
  `./mr batch next` refuses to hand out a second one while one is recorded in
  flight — trust it, including when the batch belongs to another session that
  may still be alive.
- **Before a session ends deliberately**, if its batch is still running, say so
  in `WHAT.md`. The batch dies with the session; the next session's first tick
  will see it as stale after 150 minutes and redo it — correct, but slow.
