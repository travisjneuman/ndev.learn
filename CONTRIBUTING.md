# Contributing to Neuman Learn

Thanks for your interest in contributing! This project is open source and welcomes contributions of all kinds.

## How to Contribute

### Reporting Issues

- Use [GitHub Issues](https://github.com/travisjneuman/ndev.learn/issues) to report bugs or suggest features
- Include steps to reproduce for bugs
- Check existing issues before creating a new one

### Pull Requests

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Run `npm run build` to verify the build succeeds
5. Commit with a clear message describing your change
6. Push and open a pull request

### Code Standards

- TypeScript strict mode — no `any` types
- Astro components for static content, React islands only for interactivity
- CSS variables for theming (dark/light support required)
- Tailwind CSS for utility styles
- Accessible markup (semantic HTML, ARIA labels where needed)

### Course Content

If you want to contribute course content:
- Course repos are separate (e.g., [learn.python](https://github.com/travisjneuman/learn.python))
- Platform changes (this repo) affect how courses are displayed
- Course data lives in `src/content/courses/`

## Development Setup

```bash
git clone https://github.com/travisjneuman/ndev.learn.git
cd ndev.learn
npm install
npm run dev
```

The dev server starts at `http://localhost:4321`.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
