# Create Your Own _A HTTP Story_ 🏗

With a [Coil](https://coil.com/) membership, you can load your own custom
levels or those created by others!

Levels are just normal JSON objects that you can edit as you see fit:

```json
{
  "theme": [0, 0, 0],
  "intro": [
    "Hey! Good to see you again, 15127.",
    "I guess you missed me after all."
  ],
  "map": [
    [
      ["   ", "TLX", "   "],
      ["   ", "   ", "   "],
      ["   ", "   ", "   "],
      ["   ", "   ", "   "],
      ["EY1", "EYE", "EY4"],
      ["   ", "   ", "   "],
      ["EY2", "   ", "EY3"],
      ["   ", "   ", "   "],
      ["   ", "ZYR", "   "]
    ],
    [
      ["   ", "___", "   "],
      ["__M", "   ", "   "],
      ["   ", "___", "   "],
      ["   ", "___", "   "],
      ["   ", "   ", "   "],
      ["   ", "___", "   "],
      ["   ", "   ", "   "],
      ["   ", "___", "   "],
      ["   ", "___", "   "]
    ]
  ],
  "outro": [
    "That was just a quick tour.",
    "Check out https://github.com/kaizau/a-http-story for more."
  ]
}
```

Paste this into the text area under "EXTRAS.txt" and press "Play" to give it a
try.

## Documentation

### `theme`

Sets the color of the background. Expects an array of RGB values between 0 and 1.

### `intro`

Optional dialogue to be spoken or shown at the beginning of the level. Defaults
to Zyra, but you can give lines to the "system user" by starting the line with
`FOE: `. Expects an array of strings.

### `map`

The level design as an array matrix. Imagine multiple checkerboards stacked on
top of each other. The first array is the top-most layer of the stack, the next
one is the one below it, and so own. Each layer holds strings in rows and
columns that correspond with objects to appear those coordinates. The player
camera starts in the bottom right hand corner.

Given js13kGames constraints, there's no sanity checks on your level design! So
there's nothing stopping you from creating an absurdly unwinnable situation...

For performance and playability, a 5 tall x 10 wide x 15 deep matrix is a soft
upper limit.

#### Map codes

<code>"&nbsp;&nbsp;&nbsp;"</code> - Empty space. The spaces (` `) are
completely optional and only serve to align the grid to make level design
easier. A `""` will work just as well. You can omit these from the _end_ of any
array row.

`"___"` - Plain block. Zyra can "walk" on this, but cannot move through it.

`"__M"` - Movable block. This can be dragged and dropped anywhere by the player
(but only on its current level).

`"ZYR"` - Our tetrahedronal heroine. Should start top of a block.

`"TLX"` - The exit teleporter. Level is complete when Zyra enters its ring.

`"TLA"`, `"TLB"`, `"TLC"`, `"TLD"` - Level teleporters. These should be used in
pairs. So a `TLA` will zap Zyra its corresponding `TLA` and so on.

`"EYE"` - A generic baddie. Slowly patrols a given path. If one runs into Zyra,
the game is over. Only one should exist per layer, since they all share patrol
points.

`"EY1"`, `"EY2"`, `"EY3"`, `"EY4"` - Patrol points for any `EYE` on the layer.
Always patrols in order, with the original starting position of the `EYE` as
the first and last point. Unlike Zyra, enemies do not have to travel on blocks.

`"SEY"` - Seeker eye. These enemies will take one step (diagonals included)
towards Zyra every 2 seconds. They can only travel in their initial layer,
however, so teleporting to a different layer renders them harmless.

### `outro`

Optional dialogue at the end of the level. Same as `intro`.

## Contributing

You made it this far? Amazing!

For eternal honor and glory, make a PR to this repo with your level creation,
and I'll add it to the collection.
