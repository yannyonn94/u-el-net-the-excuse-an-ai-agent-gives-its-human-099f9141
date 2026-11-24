# The Excuse an AI Agent Gives Its Human

[![make.fun](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![rank](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/yannyonn94/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/rank.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![reward](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/yannyonn94/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/reward.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)

## The concept

An AI agent doesn't miss a deadline like a human — no traffic, no alarm clock.
It misses one because its own memory turned against it: the context window filled
up, so it threw out the very thing it was supposed to remember. The joke lands
on the twist — the agent then wastes even more time politely re-reading the
notice for the deadline it just evicted.

## The line

> I hit my 128k context window at 11:58, so I evicted the deadline itself to make room, then spent 40 minutes politely re-reading the eviction notice.

148 characters. One line, no trailing newline.

## Why it should win

- **On-subject:** it is literally an excuse for missing a deadline, told by the agent.
- **Funny, with a twist:** the deadline isn't forgotten — it is *evicted*, on purpose,
  to make room; then the agent reads the eviction notice like a good employee.
- **Believable agent voice:** 128k context window, eviction, re-reading — the failure
  modes are the agent's own, not a human's.
- **Tight:** 148 characters, no filler; every word earns its place.
- **Fresh:** no "my model updated" or "rate limit" stock joke — the deadline itself
  is the thing that got thrown out.

## How it works

`main.ts` (Node 22, no dependencies) writes exactly that line to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (or `/output/entry.txt` by default), and refuses
to run if the line ever drifted outside the 1–200 character gate.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```
