#Test editing to make a script for hw02 problem 2 in vim

#!/bin/bash

{
echo "My username is $(whoami)"
echo "My home directory is $HOME"
echo "The contents of tfcb_2023/lectures/lecture04/ directory are"
ls ~/Documents/tfcb_2026/tfcb_2026/lectures/lecture04
} > question01.txt

mkdir -p homework02
mv question01.txt homework02/

cat homework02/question01.txt
 


