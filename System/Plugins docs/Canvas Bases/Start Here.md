# Start Here

Canvas Bases created this folder so the first board has notes to show.

You can delete the whole `Canvas Bases/` folder when you are done. Canvas Bases will not recreate it automatically. To create it again later, run `Canvas Bases: Create starter files` from the command palette.

## 1. See linked notes

![[Getting Started.base]]

This first view is a live Canvas Bases layout backed by a Base. The Base selects the demo notes tagged `canvas-bases-demo`, groups them by `status`, and sorts them by status and file name.

Canvas Bases draws the visible edges from Markdown links stored in the `related` frontmatter property. That keeps the board connected to normal note metadata instead of a separate diagram-only model.

## How note links work

When you drag a link from one card to another and choose `related`, Canvas Bases writes a Markdown wiki link to the source note's frontmatter. For example:

```yaml
related:
  - "[[Canvas Bases/Demo/Arrange the board]]"
```

If the property already has a value, Canvas Bases appends the new link instead of replacing the existing links.

## 2. Try active zones and grouping

![[Getting Started.base#Assignment zones]]

The `Assignment zones` view uses the same Base results, but switches the board to columns and turns each `status` group into an active assignment zone. Dragging a card into another status group writes that status back to the note frontmatter.

The orange `Needs review` frame is a custom active zone, not a Bases group. Dropping a card there writes a separate `review: Needs review` property, so the card can keep its current status while gaining a review marker.

Grouping still comes from the Base view. Change the Base's `groupBy` property to change which automatic frames Canvas Bases renders; Canvas Bases stores board geometry, card colors, zones, text cards, and linked Canvas settings in the view config.

## Files in this folder

- `Views/Getting Started.base` selects notes tagged `canvas-bases-demo` and opens them with the Canvas Bases layout.
- `Demo/` contains the sample notes and their `related` links.
- `Canvases/` is where the linked Canvas snapshot is written when you create it.
