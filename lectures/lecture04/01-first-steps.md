# Pre-flight check

Before you get started, type

    pwd

and make sure that the output ends with `tfcb_2026/lectures/lecture04`.
If not, go back to [the tutorial instructions]([https://github.com/FredHutch/tfcb_2021/tree/main/lectures/lecture03#tutorial](https://github.com/FredHutch/tfcb_2026/blob/main/software/README.md#testing-software-installation)).
Don't hesitate to ask questions if you get stuck!


# First steps

To get started, simply type

    ls

and hit return.

This shows the collection of files that are in your current directory (a.k.a. folder).

The name `ls` is an abbreviation for "list".

This is the simplest type of shell command invocation.

Next just mash the keyboard making a random command, like this:

    asdfasfkjaeasdkjaadsfkljaeflkwae

What happens?


## Anatomy of a shell command

More generally, shell commands look like

`command` `flags` `arguments`

where `flags` and `arguments` are optional.
We separate these components with spaces (extra spaces are fine).


## Arguments

Try this command with an argument:

    ls /

Here we are passing `/` to the `ls` command as an argument to tell it which directory should be listed.
Specifically, we are telling it to list the very "bottom" directory of the file system, which in unix is named `/`.
We will discuss directory structure later.

Now try

    ls asdfasdf

which should give an error unless you happen to have a file named `asdfasdf` in your current directory.
Errors are OK.
They don't cause any harm, and are a natural part of working in the shell.


## Flags

Try this command with a flag:

    ls -l /

Here `-l` is a flag which specifies that the list should be in 'long form'.
Flags generally go before the arguments, but some commands will allow them in any order.

Flags modify some form of the command behavior, and can range from simple to rather complex.

All flags start with a dash .
They can be longer than one letter, such as `-name`.

Some flags start with two dashes, like `--verbose`.
Generally two-dash flags are for long names and single-dash flags are for short names, but this convention isn't always consistently applied.

For example, try using `--long` in place of `-l` in the command above.
Does `-long` work?

Try `ls /` with and without using the `-a` flag.
Then try the `-a` and `-l` flags together as `ls -a -l`.
What about `ls -ltr` ?


## Looking at files

Try

    cat vader.txt

This is a handy way to look at small files.
Now try

    cat sequence.gb

This is not a very convenient way to view a long file, because it spits out the whole file and you will no longer be able to see the top.

A better way is to use `less`.
Before we try that, note:
**you can navigate in `less` using the arrow keys, and exit using the letter `q`**.
Try

    less sequence.gb

and have a look around this file.
Exit that `less` session using `q`.

Many commands have built-in help using `-h` or `--help`.

Try

    less --help

to find the commands that allow you to move forward and backward by page (aka window), and use them to view `sequence.gb`.

Additionally, sometimes you may only be interested in reading a specific part of a file.
For this sequence file, lines containing header information start with a '\/'. If you want to print only that, use the `grep` command:
    
    grep / sequence.gb 
    
 The general usage is
    
    grep 'word' filename
    


## On your own

Use any method you like to find documentation about the `wc` command, then use it to count the number of lines in `sequence.gb`.

Look at the documentation for the `ls` command to learn about the `-a` flag.

Look at the documentation for the `grep` command to learn about the `-v` flag.

---

Congratulations!
You now know how to navigate around the file system.

For the next step, look at the README file in the `02-directories` directory to work through the next part of the adventure.
