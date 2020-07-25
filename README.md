<h1 align="center">👩🏻‍💻</h1>
<h3 align="center">Assign Me</h3>

<p align="center">
    Automatically adds you to the assignees in the pull request
</p>

## Usage

Create the `.github/workflows/assign-me.yml` file:

```yaml
name: Automatically adds you to the assignees in the pull request
on: [pull_request]
jobs:
  assign_me:
    runs-on: ubuntu-latest
    name: Label working progress👩🏻‍💻
    steps:
      - uses: AlbertHernandez/assign-me@v1
    env:
      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```