# Homework 1: Using a GitHub repository for molecular biology research

- **Due October 15, 2026, at 1 PM Pacific. Total: 100 points.**
- Work through the five problems in order. Each problem is worth 20 points, and each numbered step inside a problem carries its own points.

## Before you start

### Choose your experiment

- Pick any one experiment you have done or plan to do: a cloning step, a transfection, an agarose gel, a stain, a buffer preparation, a flow cytometry run, or a computational analysis you ran.
- Record what you actually did. If you have not done the experiment yet, write the log as a plan and say so in the log.
- Your repository is public, so include only material you are free to share. If you cannot share your own work, record a practice procedure such as pouring an agarose gel or making 1x TAE buffer.

### Create your repository

- Create one repository named `tfcb_2026_demo` under your own GitHub account. Set visibility to **Public** and check **Add a README file**.
- Every part of this homework happens in this one repository.
- Build the layout below as you go. Replace `YYYY-MM-DD` with the relevant date. Git does not track empty folders, so create each folder when you add its first file.

```text
tfcb_2026_demo/
  README.md
  experiments/YYYY-MM-DD_i1_<short_description>.md
  experiments/img/<image file>
  analysis/qpcr/YYYY-MM-DD_i2_tidy_data_exercise/
    README.md
    data/README.md
    tables/tidy_data.csv
```

### Collect two GitHub usernames

- You need the GitHub username of the teaching assistant and of one classmate.

## Problem 1

**Open the issue before doing the experiment (20 points).**

The issue comes first, so that every file and commit afterwards points back to it.

1. Create the public `tfcb_2026_demo` repository with a README, as described above. (4 points)
2. Open an issue in your repository. Because it is the first issue in a new repository, it is issue number 1. Give it a title naming the experiment, for example `Test transfection efficiency in HEK293T cells`. (3 points)
3. In the issue body, state the question or goal in one to three sentences. (4 points)
4. In the issue body, add a bullet list of what you plan to do. (4 points)
5. In the issue body, state what will count as finished. (3 points)
6. In the issue body, state the path where the log file will go, following the layout above. (2 points)

## Problem 2

**Write the experiment log in Markdown (20 points).**

1. Create the log file at `experiments/YYYY-MM-DD_i1_<short_description>.md`. Use the date of the experiment and keep `i1`, which is your issue number. (3 points)
2. Start the file with a level-1 heading giving the title, then the experiment date on its own line as `YYYY-MM-DD`, then a link to issue 1. (3 points)
3. Add a `## Reagents` section containing a Markdown table with a header row, a separator row, and at least four reagent rows. Use the columns `reagent`, `vendor`, `catalog number`, `stock concentration`, and `final concentration`. (5 points)
4. Add a `## Procedure` section containing a numbered list of at least five steps, one action per step, with the volumes, times, and temperatures you actually used. (4 points)
5. Add a `## Result` section embedding one image, followed by a caption line stating what the image shows and who produced it. (4 points)
6. Confirm the file renders correctly at its GitHub page: the table appears as a table, the image appears, and the issue link opens. (1 point)

- Any of these images is acceptable: a gel, plate, or microscope image you took; a plot you made; or a photograph of a scheme you drew by hand. Credit someone else's figure in the caption.
- Save the image inside `experiments/img/` and link it with a path relative to the log file, so the link keeps working if the repository moves.

## Problem 3

**Commit, push, and close the loop (20 points).**

1. Make at least three commits, each with a message ending in a space followed by `#1`, for example `Add experiment log for transfection test #1`. (6 points)
2. Push every commit, and confirm all three appear in the repository commit list on GitHub. Saved files and local commits alone are not a submission. (4 points)
3. Open issue 1 and confirm your commits appear in its timeline. Record one of those commit URLs for your submission. (4 points)
4. Add a comment on issue 1 giving the result in one paragraph, with a link to the log file. (4 points)
5. Close issue 1 as completed once the log is pushed. (2 points)

- Mentioning an issue number in a commit message links the commit to the issue. It does not close the issue.

## Problem 4

**Open and organize the tidy data issue (20 points).**

1. Open a second issue, which will be issue number 2, titled `Tidy the qPCR data from the Lecture 3 exercise`. In the body, state the row unit, which is one well of one plate, and list the seven columns `plate`, `well`, `amplicon`, `sgrna`, `treatment`, `cq`, and `note`. (4 points)
2. Create two new labels under Issues, then Labels, then New label: one named `experiment` and one named `tidy-data`. Choose any color, and fill in the description field for each. (4 points)
3. Apply `tidy-data` and any one of GitHub's default labels to issue 2, and apply `experiment` to issue 1. In a comment on issue 2, state in one sentence why you chose that default label. (3 points)
4. Assign issue 2 to yourself and to the teaching assistant. (3 points)
5. Add your tidy table as `analysis/qpcr/YYYY-MM-DD_i2_tidy_data_exercise/tables/tidy_data.csv`, committed with a message ending in `#2`. (3 points)
6. Add two more files: the analysis `README.md`, stating what was done, which software you used, and a `## Changelog` section with a dated entry; and `data/README.md`, linking the original workbook. Do not commit the workbook itself. (3 points)

- GitHub lets you assign an issue to yourself, to anyone who has commented on it, and to anyone with write access, up to ten people in total. The teaching assistant becomes assignable once they accept the invitation you send in Problem 5 or comment on the issue. Send that invitation first if their name does not appear in the Assignees list.
- If you did not finish the table in class, build it from the [workbook](../../lectures/lecture03/exercise/tidy_data_exercise.xlsx).
- The workbook is the original input and stays where it is. `data/` records where to find it, and `tables/` holds the table you derived from it, which keeps inputs separate from outputs. Git stores an `.xlsx` file as an opaque binary and cannot show what changed inside it, which is why the workbook itself does not belong in your repository.

## Problem 5

**Add collaborators and publish the index (20 points).**

1. Invite the teaching assistant and one classmate under Settings, then Collaborators, then Add people. Name both usernames in your submission. (5 points)
2. In your root README, explain in your own words, in two or three sentences, what the invitation changed for your collaborators. (4 points)
3. Ask the teaching assistant or your classmate to comment on either issue, then reply to their comment. (3 points)
4. In your root README, add a `## Homework 1` section with working links to issue 1, issue 2, the log file, the image, the tidy CSV, one commit whose message ends in an issue number, and your repository's labels page at `https://github.com/<username>/tfcb_2026_demo/labels`. (6 points)
5. In your root README, state what the repository is, who made it, and the folder layout as a short bullet list. (2 points)

## Submit through Canvas

- Upload one Markdown file containing your name, your GitHub profile URL, your repository URL, the issue 1 URL, the issue 2 URL, the log file URL, the tidy CSV URL, one commit URL, and the two collaborator usernames.
- Confirm every link opens in a signed-out browser window. Your repository is public, so each one should.
- Acknowledge collaborators and any AI assistance, and state how you checked its output. You remain responsible for the accuracy of your records.
