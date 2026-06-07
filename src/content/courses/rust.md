---
title: "Learn Rust"
subtitle: "Memory-safe systems programming, CLIs, web services, and WebAssembly"
status: "coming-soon"
url: "https://learn.neuman.dev"
github: "https://github.com/travisjneuman/ndev.learn"
icon: "/images/courses/rust.svg"
color: "#CE422B"
stats:
  projects: 0
  levels: 0
  modules: 0
tags: ["Rust", "Systems", "WebAssembly", "CLI", "Concurrency"]
category: "programming"
order: 5
---

## Coming Soon

Rust is a systems programming language focused on memory safety, predictable performance, and fearless concurrency without a garbage collector. It is a strong fit for command-line tools, backend services, native desktop utilities, WebAssembly modules, embedded systems, and performance-sensitive infrastructure.

This page is currently a **curated free learning path** rather than a full first-party ndev.learn curriculum like Learn Python. Use it to start learning Rust now with official docs, hands-on exercises, and beginner-friendly practice. When the dedicated Rust curriculum is built, it should stay practice-first: tiny programs, compiler-error literacy, CLI projects, and only then frameworks like Axum, Tauri, Bevy, or WebAssembly.

## Start Here — Learning Roadmap

A suggested path from zero to useful Rust. Follow these steps in order and resist framework-hopping until the basics feel familiar:

1. **Install Rust with rustup** — Set up `rustc`, `cargo`, and `rustup`; create a project with `cargo new hello-rust` and run it with `cargo run`
2. **Read The Book slowly** — Start with chapters 1-6 of *The Rust Programming Language*: setup, guessing game, variables, ownership, structs, enums, and pattern matching
3. **Do Rustlings in parallel** — Use Rustlings for tiny exercises that force you to read, edit, compile, and fix real Rust code
4. **Write tiny programs from scratch** — Build calculators, text formatters, even/odd checkers, file readers, and simple note-taking CLIs before touching frameworks
5. **Learn compiler-error literacy** — Treat the Rust compiler as a strict coach; read one error at a time, fix one thing at a time, and rerun
6. **Understand ownership by using it** — Practice `String` vs `&str`, borrowing, references, `Vec<T>`, `Option<T>`, and `Result<T, E>` in small programs
7. **Build small CLI tools** — Practice file I/O, argument parsing, error handling, and tests with crates like `clap`, `anyhow`, `serde`, and `reqwest`
8. **Learn traits and generics** — Understand how Rust expresses shared behavior and reusable code without losing type safety
9. **Explore async and web services** — Learn Tokio as the async runtime, then Axum as a high-level HTTP/API framework built on the Tokio/hyper ecosystem
10. **Choose a specialty lane** — Try Tauri for desktop apps, WebAssembly for browser hot paths, Bevy for games, wgpu for graphics, or Embedded Rust for hardware only after the fundamentals are solid

## Official & Core Documentation

- [The Rust Programming Language](https://doc.rust-lang.org/book/) — "The Book" — the definitive, community-maintained guide to learning Rust from scratch (Beginner)
- [Rust by Example](https://doc.rust-lang.org/rust-by-example/) — Learn Rust through annotated, runnable code examples (Beginner)
- [Rust Standard Library Documentation](https://doc.rust-lang.org/std/) — Complete API reference for the standard library (All levels)
- [The Cargo Book](https://doc.rust-lang.org/cargo/) — Official guide to Rust's package manager and build system (Beginner)
- [Rust Error Index](https://doc.rust-lang.org/error_codes/error-index.html) — Plain explanations for compiler error codes and how to fix them (Beginner)
- [Rust API Guidelines](https://rust-lang.github.io/api-guidelines/) — Conventions and best practices for Rust API design (Intermediate)
- [Async Book](https://rust-lang.github.io/async-book/) — Official guide to asynchronous programming in Rust (Intermediate)
- [Rust Reference](https://doc.rust-lang.org/reference/) — Formal specification of Rust syntax and semantics (Advanced)
- [The Rustonomicon](https://doc.rust-lang.org/nomicon/) — Advanced guide to unsafe Rust and low-level details; skip until you are comfortable with safe Rust (Advanced)
- [Rust Roadmap](https://roadmap.sh/rust) — Community-created visual roadmap for Rust developers (Beginner)

## GitHub Awesome Lists & Curated Collections

- [awesome-rust](https://github.com/rust-unofficial/awesome-rust) — Comprehensive curated list of Rust code, tools, libraries, and resources
- [awesome-rust-and-webassembly](https://github.com/rustwasm/awesome-rust-and-webassembly) — Curated list of Rust + WebAssembly projects, libraries, and tools
- [awesome-embedded-rust](https://github.com/rust-embedded/awesome-embedded-rust) — Resources for embedded and low-level development in Rust
- [rust-learning](https://github.com/ctjhoa/rust-learning) — Collection of Rust learning resources including blog posts, articles, and tutorials
- [awesome-alternatives-in-rust](https://github.com/TaKO8Ki/awesome-alternatives-in-rust) — Curated list of CLI and system tools rewritten in Rust
- [not-yet-awesome-rust](https://github.com/not-yet-awesome-rust/not-yet-awesome-rust) — Gaps in the Rust ecosystem where contributions are welcome

## Interactive Courses & Hands-On Platforms

### Free Courses
- [Rustlings](https://rustlings.cool/) — Official small exercises to learn Rust syntax and concepts, run from your terminal (Beginner)
- [Rustlings on GitHub](https://github.com/rust-lang/rustlings) — Source repository for Rustlings, useful for setup details and releases (Beginner)
- [100 Exercises to Learn Rust](https://rust-exercises.com/) — Luca Palmieri's progressive, hands-on Rust challenges (Beginner)
- [Comprehensive Rust (Google)](https://google.github.io/comprehensive-rust/) — Free course developed by Google's Android team, used internally at Google (Beginner)
- [Tour of Rust](https://tourofrust.com/) — Step-by-step interactive Rust tour in the browser (Beginner)
- [Brown CS Interactive Rust Book](https://rust-book.cs.brown.edu/) — Interactive version of the Rust Book with quizzes and visualizations (Beginner)

### University & MOOC Courses
- [CS 242: Programming Languages — Rust content](https://stanford-cs242.github.io/f19/) — Programming language concepts with Rust-related materials from Stanford (Intermediate)
- [CodeCrafters — Rust Track](https://codecrafters.io/tracks/rust) — Build your own Redis, Git, SQLite from scratch in Rust (Intermediate, Paid)
- [Educative — Learn Rust from Scratch](https://www.educative.io/courses/learn-rust-from-scratch) — Interactive Rust course with in-browser coding (Beginner, Paid)
- [Udemy — Ultimate Rust Crash Course](https://www.udemy.com/course/ultimate-rust-crash-course/) — Nathan Stocks' popular hands-on Rust course (Beginner, Paid)

### Practice & Challenges
- [Exercism Rust Track](https://exercism.org/tracks/rust) — Free mentored coding exercises with automatic analysis and community feedback (Beginner)
- [Rust Playground](https://play.rust-lang.org/) — Write and run Rust code directly in the browser (All levels)
- [Advent of Code](https://adventofcode.com/) — Annual coding puzzles, popular in the Rust community for practice (Intermediate)
- [Codewars Rust](https://www.codewars.com/?language=rust) — Progressive coding challenges in Rust (All levels)
- [LeetCode Rust](https://leetcode.com/) — Algorithm challenges with Rust support (Intermediate)
- [Rust Quiz](https://dtolnay.github.io/rust-quiz/) — Tricky Rust quiz questions to test deep language understanding; save for later (Advanced)
- [Project Euler](https://projecteuler.net/) — Mathematical programming challenges for practicing Rust algorithms (Intermediate)

## Video Courses & YouTube Channels

### Structured Course Playlists
- [Let's Get Rusty](https://www.youtube.com/@letsgetrusty) — Follows "The Book" chapter by chapter with clear explanations (Beginner)
- [freeCodeCamp — Rust Course](https://www.youtube.com/watch?v=BpPEoZW5IiY) — Comprehensive free Rust course by Arfan Zubi (Beginner)
- [Ryan Levick — Introduction to Rust](https://www.youtube.com/@RyanLevicksVideos) — Introduction to Rust series from a Microsoft engineer (Beginner)

### Individual Creators & Channels
- [Jon Gjengset](https://www.youtube.com/@jonhoo) — Deep-dive intermediate and advanced Rust live coding and streams (Advanced)
- [No Boilerplate](https://www.youtube.com/@NoBoilerplate) — Compelling explanations of why Rust matters and how Rust concepts work (Beginner)
- [Tim McNamara (timClicks)](https://www.youtube.com/@timClicks) — Practical Rust tutorials and systems programming content (Intermediate)
- [Code to the Moon](https://www.youtube.com/@codetothemoon) — Rust concepts, comparisons, and real-world applications (Intermediate)
- [Traversy Media — Rust Crash Course](https://www.youtube.com/watch?v=zF34dRivLOw) — Quick introduction to Rust fundamentals (Beginner)
- [fasterthanlime](https://www.youtube.com/@fasterthanlime) — Deep technical Rust content, systems programming, and detailed explorations (Advanced)
- [Logan Smith](https://www.youtube.com/@_noisecode) — Rust concepts explained through comparisons with C++ (Intermediate)
- [RustConf Talks](https://www.youtube.com/results?search_query=rustconf+2024) — Recorded sessions from the annual Rust conference (Intermediate)
- [Rust in 100 Seconds (Fireship)](https://www.youtube.com/watch?v=5C_HPTJg5ek) — Quick engaging overview of Rust's key features (Beginner)

## Books & Long-Form Reading

### Free Online Books
- [The Rust Programming Language](https://doc.rust-lang.org/book/) — The official free book, the definitive starting point (Beginner)
- [Rust by Example](https://doc.rust-lang.org/rust-by-example/) — Free collection of runnable examples covering the language (Beginner)
- [Command-Line Rust companion materials](https://github.com/kyclark/command-line-rust) — Project code for building CLI tools in Rust; pair with the book if you have access (Beginner)
- [Rust Design Patterns](https://rust-unofficial.github.io/patterns/) — Free collection of idiomatic Rust patterns and anti-patterns (Intermediate)
- [Comprehensive Rust (Google)](https://google.github.io/comprehensive-rust/) — Google's free Rust course covering fundamentals through Android development (Beginner)
- [The Embedded Rust Book](https://docs.rust-embedded.org/book/) — Free guide to using Rust for embedded systems and microcontrollers (Advanced)
- [The Rustonomicon](https://doc.rust-lang.org/nomicon/) — Free advanced guide to unsafe Rust; read only after safe Rust fundamentals are solid (Advanced)

### Essential Paid Books
- [Programming Rust](https://www.oreilly.com/library/view/programming-rust-2nd/9781492052586/) — Comprehensive Rust from O'Reilly, covering the language in depth (Intermediate, Paid)
- [Zero To Production In Rust](https://www.zero2prod.com/) — Build a real backend service from scratch, the best project-based Rust book (Intermediate, Paid)
- [Rust for Rustaceans](https://nostarch.com/rust-rustaceans) — Jon Gjengset's intermediate-level guide for those past the basics (Advanced, Paid)
- [Rust in Action](https://www.manning.com/books/rust-in-action) — Systems programming projects covering networking and OS concepts (Intermediate, Paid)
- [Command-Line Rust](https://www.oreilly.com/library/view/command-line-rust/9781098109424/) — Learn Rust by building CLI tools that replace common Unix utilities (Beginner, Paid)
- [Hands-on Rust](https://pragprog.com/titles/hwrust/hands-on-rust/) — Learn Rust by building games with bracket-lib (Beginner, Paid)

## Community, Practice & News

### Forums & Discussion
- [Rust Users Forum](https://users.rust-lang.org/) — Official forum for questions, project ideas, and community discussion
- [Rust Discord](https://discord.gg/rust-lang) — Unofficial but highly active Discord with channels for help and projects
- [r/rust](https://www.reddit.com/r/rust/) — Active Reddit community for Rust news, projects, and discussion
- [r/learnrust](https://www.reddit.com/r/learnrust/) — Beginner-friendly subreddit for Rust learners
- [Rust Zulip](https://rust-lang.zulipchat.com/) — Official chat for Rust contributors and working groups

### Newsletters & Blogs
- [This Week in Rust](https://this-week-in-rust.org/) — Weekly newsletter with Rust news, articles, and community updates
- [Rust Blog](https://blog.rust-lang.org/) — Official blog with release announcements and feature deep dives
- [Read Rust](https://readrust.net/) — Curated collection of interesting Rust blog posts and articles
- [fasterthanlime blog](https://fasterthanli.me/) — In-depth technical articles about Rust, systems programming, and networking

### Package Registries & Ecosystems
- [crates.io](https://crates.io/) — Rust's official package registry for discovering and sharing libraries
- [docs.rs](https://docs.rs/) — Automatic documentation for every crate published to crates.io
- [lib.rs](https://lib.rs/) — Alternative crate discovery site with categorized recommendations

## Tools & Environments

- [rustup](https://rustup.rs/) — Official Rust toolchain installer and version manager
- [Cargo](https://doc.rust-lang.org/cargo/) — Rust's package manager, build tool, test runner, and project workflow backbone
- [Rust Playground](https://play.rust-lang.org/) — Browser-based Rust compiler with instant feedback and sharing
- [rust-analyzer](https://rust-analyzer.github.io/) — Fast, feature-rich LSP server for Rust in VS Code and other editors
- [clippy](https://github.com/rust-lang/rust-clippy) — Official Rust linter with hundreds of lint rules for idiomatic code
- [rustfmt](https://github.com/rust-lang/rustfmt) — Official Rust formatter, usually run through `cargo fmt`
- [cargo-watch](https://github.com/watchexec/cargo-watch) — Watches for file changes and runs cargo commands automatically
- [bacon](https://github.com/Canop/bacon) — Background Rust code checker with live-reload and error highlighting
- [cargo-expand](https://github.com/dtolnay/cargo-expand) — Shows the result of macro expansion and procedural macros
- [miri](https://github.com/rust-lang/miri) — Interpreter for detecting undefined behavior in unsafe Rust code (Advanced)
- [criterion.rs](https://github.com/bheisler/criterion.rs) — Statistics-driven benchmarking library for Rust (Intermediate)
- [wasm-pack](https://rustwasm.github.io/wasm-pack/) — Build, test, and publish Rust-generated WebAssembly packages

## Practical Rust Lanes

- **Beginner foundation:** The Rust Book + Rustlings + tiny CLI programs
- **Backend/API:** Tokio as the async runtime, Axum as the higher-level HTTP/API framework, SQLx for async database access
- **Desktop/internal tools:** Tauri for web-powered desktop apps, egui for immediate-mode native/dev-tool UIs
- **WebAssembly:** Rust compiled to WASM for performance-sensitive browser modules, not as a default replacement for every frontend
- **Games/graphics:** Bevy for Rust game development, wgpu for GPU/rendering work
- **Embedded/systems:** Embedded Rust and kernel-adjacent Rust once fundamentals are solid

## First Tiny Project Recommendation

Build a `note-capture-cli` before any framework project:

1. `cargo new note-capture-cli`
2. `cargo run -- add "Today I learned cargo run"` appends to `notes.txt`
3. `cargo run -- list` prints all notes
4. `cargo run -- search cargo` prints matching notes
5. Add one helper function and one unit test

This project teaches command-line arguments, strings, files, functions, errors, and tests without burying you under framework complexity.
