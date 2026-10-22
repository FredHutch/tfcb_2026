#!/bin/bash

mkdir texts
cd texts

for i in {1..32}
do echo text_text_$i > text_file_$i.txt
done

for pineapple in `ls *.txt`
do mv $pineapple important_$pineapple
done