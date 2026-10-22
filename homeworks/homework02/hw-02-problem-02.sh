#!/bin/bash

mkdir ~/Documents/tfcb_2026/tfcb_2026/homeworks/homework02/question02

for i in `cat list.txt` ; do echo $i ; done 

for i in `cat list.txt` ; do echo text_$i > ~/Documents/tfcb_2026/tfcb_2026/homeworks/homework02/question02/file$i.txt ; done


