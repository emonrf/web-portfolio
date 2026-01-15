# Image to GIF Hover Effect

Your projects now support a hover effect that switches from a static image to an animated GIF.

## How It Works

When you hover over a project card:
- **Default:** Shows the static `image`
- **On Hover:** Switches to the `gif` (if provided)
- **On Leave:** Returns to static `image`

## Setup

### 1. Add Your Files

Place images in the `public/projects/` folder:

```
public/
└── projects/
    ├── scheduler.png       ← Static image
    ├── scheduler.gif       ← Animated GIF (plays on hover)
    ├── collab.png
    └── ai-reviewer.png
```

### 2. Update Configuration

Edit `src/config/portfolio.js`:

```javascript
projects: [
  {
    id: 1,
    title: "Your Project",
    // ... other fields
    image: "/projects/scheduler.png",     // Required: static image
    gif: "/projects/scheduler.gif"        // Optional: animated GIF
  },
  {
    id: 2,
    title: "Another Project",
    image: "/projects/collab.png"
    // No gif property = static only (no hover effect)
  }
]
```

## Usage

### With GIF Hover Effect
```javascript
{
  id: 1,
  title: "My Project",
  image: "/projects/static.png",
  gif: "/projects/demo.gif"  // ← Add this line
}
```

### Without GIF (Static Only)
```javascript
{
  id: 2,
  title: "My Other Project",
  image: "/projects/static.png"
  // No gif property
}
```

## Tips

### Creating GIFs from Screen Recordings

**macOS:**
- Use QuickTime to record screen
- Convert to GIF with [Gifski](https://gif.ski/)

**Windows:**
- Use ScreenToGif (free tool)
- Record → Edit → Export as GIF

**Online:**
- [Cloudinary](https://cloudinary.com/tools/video-to-gif)
- [ezgif.com](https://ezgif.com/)

### Optimizing GIFs

Keep file sizes small for fast loading:
- Max 5-10 seconds duration
- 800px width maximum
- Use tools like [gifsicle](https://www.lcdf.org/gifsicle/) to compress

```bash
# Compress GIF (reduce file size)
gifsicle -O3 input.gif -o output.gif
```

### Best Practices

1. **File Size:** Keep GIFs under 2-3 MB
2. **Dimensions:** Match static image size (e.g., 800x600px)
3. **Duration:** 3-8 seconds for demos
4. **Frame Rate:** 10-15 fps is enough for UI demos
5. **Fallback:** Always provide a static image

## Technical Details

The hover effect uses:
- React `useState` to track hover state
- `onMouseEnter` / `onMouseLeave` events
- Conditional rendering: `isHovered && project.gif ? project.gif : project.image`
- Smooth transition with `transition-opacity duration-300`

## Example File Structure

```
public/
└── projects/
    ├── scheduler.png          (200 KB)
    ├── scheduler.gif          (2.5 MB) ← Plays on hover
    ├── collab.png             (180 KB)
    ├── collab.gif             (1.8 MB) ← Plays on hover
    └── ai-reviewer.png        (150 KB) ← Static only
```

## Troubleshooting

### GIF not showing on hover
- Check file path is correct (starts with `/projects/`)
- Verify GIF exists in `public/projects/`
- Clear browser cache (Ctrl+F5)

### GIF loads slowly
- Compress the GIF (see optimization tips above)
- Reduce dimensions (800px width max)
- Shorten duration (5 seconds max)

### Transition not smooth
- The fade is CSS-based: `transition-opacity duration-300`
- Adjust in `Projects.jsx` if needed

## Performance

The GIF only loads when you hover, so it doesn't slow down initial page load. Static images load first, GIFs load on demand.
