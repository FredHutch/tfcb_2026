---
customTheme: "style"
enableTitleFooter: false
enableMenu: false
enableChalkboard: false
center: true
controls: false
progress: false
slideNumber: false
transition: "none"
title: Tools for Computational Biology, 14 Nov 2024
---


## Introduction to Sequencing Data Analysis

### Arvind Rasi Subramaniam


---

## Overview

Introduction to sequence data and resources

Tools for analyzing and visualizing sequencing data

---

### Learning Objectives

1. **Sequence Data**
   - Databases and online resources for sequence data
   - Common sequence data file formats

2. **Tools for Sequencing Data**
   - Tools to query, inspect, visualize aligned sequence files


---

## Sequence Data: International Consortia and Projects

[100,000 Genomes Project](https://www.genomicsengland.co.uk/)

[Genome 10K Project](https://genome10k.soe.ucsc.edu/)

[Genome Aggregation Database (gnomAD)](https://gnomad.broadinstitute.org/)

[The Cancer Genome Atlas (TCGA)](https://portal.gdc.cancer.gov/)

---

## Common Repositories for Human Sequence Data

[**NCBI Sequence Read Archive (SRA)**](https://www.ncbi.nlm.nih.gov/gds/)


[**NIH NCI Genomic Data Commons (GDC) Data Portal**](https://portal.gdc.cancer.gov/)


---

### Sequence Data: File Formats

- **Genome sequences**: FASTA (.fasta or .fa)
- **Sequenced reads**: FASTQ (.fastq or .fq)
- **Sequence Alignment/Map Format**  
  - SAM (.sam) - Sequence Alignment
  - BAM (.bam) / CRAM (.cram) - Binary Alignment

---

### FASTA format

<div class="code-block" style="text-align:left;margin: 0 auto;">
    <span class="header">>seq1 Description of the sequence</span><br>
    <span class="sequence">AGCTTAGCTAGCTCGATCGATCGATCGA</span><br>
    <span class="sequence">AGCTAGCTAGCTAGCTAGCTAGCTAGCA</span><br><br>
    <span class="header">>seq2 Another sequence description</span><br>
    <span class="sequence">CGTAGCTAGCTCGATCGATCGTAGCTAG</span><br>
    <span class="sequence">CTAGCTAGCTAGCTCGATCGATCGTAGC</span>
</div>

---

### FASTQ format

<div class="code-block" style="text-align:left;margin: 0 auto;">
    <span class="header">@SEQ_ID</span><br>
    <span class="sequence">AGCTTAGCTAGCTCGATCGATCGATCGA</span><br>
    <span class="separator">+</span><br>
    <span class="quality">!''*((((***+))%%%++)(%%%%).1</span><br><br>
    <span class="header">@SEQ_ID2</span><br>
    <span class="sequence">CGTAGCTAGCTCGATCGATCGTAGCTAG</span><br>
    <span class="separator">+</span><br>
    <span class="quality">)%%%)))(%)))))))))))))****!!</span>
</div>

---

### Sequence Read Archive (SRA) Example

To download and process SRA files:

```bash
prefetch SRR2130004
fastq-dump SRR2130004.sra
sam-dump --header SRR2130004.sra > SAMN03160688.sam
sam-dump --header SRR2130004.sra | samtools view -bS - > BRCA_IDC_cfDNA.bam
```

---

### Sequence Alignment: Burrows-Wheeler Aligner (BWA)

- **bwa aln**: For 35bp to 100bp reads
- **bwa mem**: Recommended for reads 70bp to 1Mb

```bash
bwa mem -M reference.fa BRCA_IDC_cfDNA_R1.fq BRCA_IDC_cfDNA_R2.fq > BRCA_IDC_cfDNA.bam
```

---

## Inspecting and Reading BAM Files


**SAMtools** is a suite of programs for interacting with high-throughput sequencing data, particularly in SAM (Sequence Alignment/Map) and BAM (Binary Alignment/Map) formats.


[SAMtools Documentation](http://www.htslib.org/)


---

### Header Information

The header section in a SAM file provides metadata about the file and its contents. Key header fields include:

```
@HD     VN:1.2  SO:coordinate
@SQ     SN:1    LN:249250621
@SQ     SN:2    LN:243199373
@SQ     SN:3    LN:198022430
@SQ     SN:4    LN:191154276
@SQ     SN:5    LN:180915260
@SQ     SN:6    LN:171115067
@SQ     SN:7    LN:159138663
@SQ     SN:8    LN:146364022
@SQ     SN:9    LN:141213431
```

---

- `@HD`: Header line, which defines the version of the SAM format.
  - `VN`: Version number
  - `SO`: Sorting order of alignments (e.g., coordinate)

- `@SQ`: Reference sequence dictionary, with entries for each reference sequence:
  - `SN`: Reference sequence name (e.g., chromosome)
  - `LN`: Length of the reference sequence

- `@RG`: Read group information, which includes:
  - `ID`: Read group identifier
  - `PL`: Platform or technology used (e.g., ILLUMINA)
  - `SM`: Sample ID

- `@PG`: Program information:
  - `ID`: Program identifier
  - `PN`: Program name
  - `CL`: Command line used to run the program

---

### Alignment Information

<div class="code-block">
    <span class="field-query">41976152</span>        <!-- Query (Read) Name -->
    <span class="field-flag">163</span>              <!-- Flag -->
    <span class="field-rname">17</span>              <!-- Reference Sequence Name (RNAME) -->
    <span class="field-pos">37844359</span>          <!-- Position (POS) -->
    <span class="field-mapq">60</span>               <!-- Mapping Quality (MAPQ) -->
    <span class="field-cigar">39M</span>             <!-- CIGAR String -->
    <span class="field-rnext">=</span>               <!-- Mate’s Reference Name (RNEXT) -->
    <span class="field-pnext">37844477</span>        <!-- Mate’s Position (PNEXT) -->
    <span class="field-tlen">157</span>              <!-- Template Length (TLEN) -->
    <span class="field-seq">ACTCTCCGCTGAAGTCCACACAGTTTAAATTAAAGTTCC</span> <!-- Read Sequence (SEQ) -->
    <span class="field-qual">.AAAAFFFFFFFFFFFF)FAFFFFFFFFFFFFFFFFFFF</span> <!-- Quality Scores (QUAL) -->
    <span class="field-optional">RG:Z:P12.17.7_Breast NH:i:1  NM:i:0</span> <!-- Optional fields -->
</div>

<div class="field-descriptions" style="text-align:left;margin: 0 auto;">
    <span class="field-query">41976152: Query (Read) Name</span>
    <span class="field-flag">163: Flag</span>
    <span class="field-rname">17: Reference Sequence Name (RNAME)</span>
    <span class="field-pos">37844359: Position (POS)</span>
    <span class="field-mapq">60: Mapping Quality (MAPQ)</span>
    <span class="field-cigar">39M: CIGAR String</span>
    <span class="field-rnext">=: Mate’s Reference Name (RNEXT)</span>
    <span class="field-pnext">37844477: Mate’s Position (PNEXT)</span>
    <span class="field-tlen">157: Template Length (TLEN)</span>
    <span class="field-seq">ACTCTCCGCTGAAGTCCACACAGTTTAAATTAAAGTTCC: Read Sequence (SEQ)</span>
    <span class="field-qual">.AAAAFFFFFFFFFFFF)FAFFFFFFFFFFFFFFFFFFF: Quality Scores (QUAL)</span>
    <span class="field-optional">RG:Z:P12.17.7_Breast NH:i:1  NM:i:0: Optional fields</span>
</div>

---


### Common Commands in SAMtools

1. **Indexing BAM files**

   Index a BAM file, which is required for efficient retrieval of alignment data:
   ```bash
   samtools index BRCA_IDC_cfDNA.bam
   ```

2. **Sorting BAM files**

   Sort a BAM file by coordinate:
   ```bash
   samtools sort BRCA_IDC_cfDNA.bam
   ```

---

### Common Commands in SAMtools

3. **Alignment Metrics**

   Generate general alignment metrics for a BAM file:
   ```bash
   samtools flagstat BRCA_IDC_cfDNA.bam
   ```

4. **Viewing Header Information**

   View the header information of a BAM file:
   ```bash
   samtools view -H BRCA_IDC_cfDNA.bam
   ```

5. **Viewing Aligned Reads at a Specific Location**

   For example, view reads aligned to `chr17:37844393`:
   ```bash
   samtools view BRCA_IDC_cfDNA.bam 17:37844393
   ```

---

# Exercise: SAMtools

```bash
# While in dev container 
conda activate samtools
# Go to directory where class data has been downloaded
cd tfcb_2026/lectures/lecture15
```

1. **Run `samtools view` header command on `BRCA_IDC_cfDNA.bam`**  
   - **Question**: What is the read group (`@RG`) ID?

2. **Run `samtools view` at `17:7579472-7579472`**  
   - **Question**: What is the insert size?

---

## Accessing BAM Files in R and Python

Python: [PySam](https://pysam.readthedocs.io/en/latest/api.html)

R Bioconductor: [Rsamtools](https://bioconductor.org/packages/release/bioc/vignettes/Rsamtools/inst/doc/Rsamtools-Overview.pdf), [GenomicAlignments](https://bioconductor.org/packages/release/bioc/vignettes/GenomicAlignments/inst/doc/GenomicAlignments.html)