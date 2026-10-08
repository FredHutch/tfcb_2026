---
controls: false
progress: false
enableMenu: false
enableChalkboard: false
enableTitleFooter: false
enableSearch: false
transition: slide
theme: night
customTheme: custom
---

# Project and Data Organization

## TFCB Lecture 3

October 8, 2026

[Rasi Subramaniam](https://rasilab.org)

---

## What will you learn?

- Organize projects in GitHub repositories
- Write and format text with Markdown
- Structure tabular data in CSV files
- Arrange writing and data in files and folders
- Organize research tasks using GitHub issues
- Understand reproducible software containers

---

## What would you track in a scientific project?

- Data
- Analysis code
- Experiment notebooks
- Notes and literature review
- Presentations
- Manuscripts
- Grant and fellowship applications
- Discussions with collaborators

---

## Use one GitHub repository per project

- For one researcher or a team of collaborators
- Organize project files and track their changes
- Use [issues](https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/about-issues) to discuss and track ideas, plans, work progress, and results
- Private or public
- [Example](https://github.com/rasilab/codon_optimality_mammalian_cells)

---

## Use one GitHub repository per paper

- After publication: a reproducible public record of the work
- Where to find data and how to retrieve them
- How to run the code in the required software environment
- How data and code generate manuscript figures
- Manuscript text
- [Example](https://github.com/rasilab/nugent_2024)

---

## Use Markdown for writing

- [README.md](https://github.com/rasilab/codon_optimality_mammalian_cells/blob/master/README.md)
- [Manuscript](https://github.com/rasilab/nugent_2024/blob/main/manuscript/manuscript.md)
- [Experiment notebook](https://github.com/rasilab/codon_optimality_mammalian_cells/blob/master/experiments/hborror/2026-02-24_i431_illumina_GC_reporter_library_prep_wt.md)
- [Presentation](https://github.com/rasilab/codon_optimality_mammalian_cells/blob/master/presentations/hborror/journal_club/20261006/presentation.md)

---

## Use CSV for tabular data

<pre class="csv"><span class="c0 h">Well</span><span class="sep">,</span><span class="c1 h">Amplicon</span><span class="sep">,</span><span class="c2 h">Treatment</span><span class="sep">,</span><span class="c3 h">Reporter</span>
<span class="c0">B02</span><span class="sep">,</span><span class="c1">globin</span><span class="sep">,</span><span class="c2">eFT226</span><span class="sep">,</span><span class="c3">PTC</span>
<span class="c0">B03</span><span class="sep">,</span><span class="c1">globin</span><span class="sep">,</span><span class="c2">4E1RCat</span><span class="sep">,</span><span class="c3">PTC</span>
<span class="c0">E02</span><span class="sep">,</span><span class="c1">mCherry</span><span class="sep">,</span><span class="c2">eFT226</span><span class="sep">,</span><span class="c3">PTC</span></pre>

- Plain text: one header row of column names, then one row per record
- Readable by people, by most programming languages, and by spreadsheets
- [Example 1](https://github.com/rasilab/nugent_2024/blob/79141480167a3168c1b678ff6b3650ec2b9d3fc5/analysis/qpcr/figs4_nmd_reporter_validation/annotations/sampleannotations.csv), [Example 2](https://github.com/rasilab/nugent_2024/blob/79141480167a3168c1b678ff6b3650ec2b9d3fc5/analysis/barcodeseq/rbp_barcode_screens/annotations/sample_annotations.csv), [Example 3](https://github.com/rasilab/nugent_2024/blob/79141480167a3168c1b678ff6b3650ec2b9d3fc5/analysis/barcodeseq/rbp_barcode_screens/annotations/mageck_comparisons.csv)
- See incremental changes in GitHub: [Example](https://github.com/rasilab/nugent_2024/commit/c51c56ffc9017396aa6cda09b0679f701aeaa046)

---

## What is tidy data?

> Tidy datasets are all alike but every messy dataset is messy in its own way.

<p class="source"><a href="https://www.jstatsoft.org/article/view/v059i10">Wickham 2014</a></p>

- Each variable forms a column
- Each observation forms a row
- Each type of observational unit forms a table

---

## Organize files and folders consistently

<div class="tree">
<div class="row d0"><span class="readme">README.md</span><span class="desc">start here: what the repository contains</span></div>
<div class="row d0"><span class="records">experiments/</span><span class="desc">dated lab notebooks</span></div>
<div class="row d1"><span class="records">person/date_iN_description.md</span><span class="desc">one notebook per issue</span></div>
<div class="row d0"><span class="analysis">analysis/</span><span class="desc">one folder per analysis</span></div>
<div class="row d1"><span class="analysis">person/assay/date_iN_description/</span><span class="desc"></span></div>
<div class="row d2"><span class="readme">README.md</span><span class="desc">what was done and why</span></div>
<div class="row d2"><span class="inputs">annotations/</span><span class="desc">inputs: sample tables (CSV)</span></div>
<div class="row d2"><span class="inputs">data/</span><span class="desc">inputs: links to original data</span></div>
<div class="row d2"><span class="code">scripts/</span><span class="desc">code</span></div>
<div class="row d2"><span class="outputs">tables/</span><span class="desc">outputs: derived tables</span></div>
<div class="row d2"><span class="outputs">figures/</span><span class="desc">outputs: plots</span></div>
<div class="row d0"><span class="writing">manuscripts/</span><span class="desc">paper drafts and figures</span></div>
<div class="row d0"><span class="writing">presentations/</span><span class="desc">talks and lab updates</span></div>
<div class="row d0"><span class="writing">grants/</span><span class="desc">grant and fellowship applications</span></div>
</div>

- [Template](https://github.com/rasilab/project_repo)
- [Example](https://github.com/rasilab/codon_optimality_mammalian_cells)

---

## Create issues and comment on them

- An issue links all work on a scientific task
- Use issue numbers to link all files related to the issue
- Record plans, discussion, and results as comments
- [Example](https://github.com/rasilab/codon_optimality_mammalian_cells/issues/467)

---

## Organize issues with projects

- Useful for prioritizing between different experimental and computational tasks
- Group issues into projects with dates, labels, and collaborators
- View the same issues as a table, board, or Gantt chart
- [Example](https://github.com/orgs/rasilab/projects/40/views/2)

---

## Use containers for reproducible software

- A container is an isolated environment holding all the software an analysis needs
- A plain-text recipe creates the environment programmatically
- It runs the same way on any computer, now and years later
- [Example](https://github.com/orgs/rasilab/packages)

---

## In-class exercise for tidying data

- Fork this repository to your GitHub account
- Open the [Excel workbook](https://github.com/FredHutch/tfcb_2026/blob/main/lectures/lecture03/exercise/tidy_data_exercise.xlsx)
- Convert it into a tidy data format
- Save the table as `tidy_data.csv` and push it back to your fork of this class repository

---

## Further reading

[GitHub is an effective platform for collaborative and reproducible laboratory research](https://arxiv.org/abs/2408.09344)
