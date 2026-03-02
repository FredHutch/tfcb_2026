# Software installation

We ask you come prepared to class with a laptop on which you can participate in coding activities. Please follow the instructions below to install the required software for this course (all programs are freely available for academic use). We'll use the other files in this directory to test the software together in class. The tools you'll need include:

- [VSCode Editor](#text-editor) for file viewing / manipulation
- [Docker](#docker) for running software in reproducible environments
- [VSCode Remote Development Extension Pack](#vscode-remote-development-extension-pack) for running software withing VSCode
- [Git](#git) for version control

Once you have the above software installed, you should be able to run the example [Python](test_python.ipynb) and [R](test_R.ipynb) Jupyter notebooks after you open this repository using a Remote Development Container within VSCode.

## VSCode Text Editor

We will use VSCode as the source code and text editor for this class. Install [VSCode](https://code.visualstudio.com/Download) on your computer and view the introductory video [here](https://code.visualstudio.com/docs/introvideos/basics) before the first class to familiarize yourself with the user interface.

We will use the following features in VSCode as part of this class:

1. Work with [Git and GitHub](https://code.visualstudio.com/docs/introvideos/versioncontrol) for version control (see more below).
2. Edit Markdown files and [preview rendered versions](https://code.visualstudio.com/docs/languages/markdown).
3. Write Python and R code in [native Jupyter notebooks](https://code.visualstudio.com/docs/datascience/jupyter-notebooks).
4. Use the [integrated terminal](https://code.visualstudio.com/docs/editor/integrated-terminal).
5. [Connect to and work on remote hosts](https://code.visualstudio.com/docs/remote/ssh) such as the Fred Hutch Rhino computing cluster.

## Docker

We need Docker for creating reproducible environments for running programs written in Python or R.
You can install Docker following links [here](https://code.visualstudio.com/docs/remote/containers#_installation). Ignore steps 2 and 3 about the WSL 2 for now. 

## VSCode Remote Development Extension Pack

You can follow instructions [here](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack) to install the extension pack.

## Git

You can follow the instructions [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) to install Git. Use the default settings in the installer.

## Testing Software Installation

Once you have installed the requisite software, then you should be able to perfom the following steps:

1) Open VS Code

1) Clone tfcb_2026 repo to your local computer  
    - Navigate to the [tfcb_2026](https://github.com/FredHutch/tfcb_2026) and find a green button labeled **Code** near the top right corner. Once you click the **Code**  button, a dropdown will appear. Copy the URL under "HTTPS" tab option.  
    - If using VSCode interface: Click **Clone Git Repository...**  and paste the URL   
    - If using terminal: Navigate to the directory where you want to clone the repository using the terminal. Use the command: `git clone <URL>`

1) Open the tfcb_2026 local folder in VS Code. A notification of "Folder containing a Dev Container configuration file" will appear. Click "Reopen in Container". If you don't get this notification, type `Ctrl  + Shft + P`, then type `Dev Containers: Open folder in container...` and then press `Enter`. This will install the container and re-open the folder within the container. *Note: this step might take a long time depending on your computer and internet speed, so please try to complete this step before Oct 6.* 

1) After installing the container, then you should be able to run the test code. Make sure to pick the right kernel for R or python (see below).


## Tips for troubleshooting
### Jupyter Kernels in VSCode
1) Jupyter Extension in VSCode:
    * Ensure you have the Jupyter Extension for VSCode installed within the development container. 

1) Checking Your Active Environment:
    * Open a terminal in VSCode within the development container.
    * Observe the environment indicator, usually displayed to the left of your current path in the terminal. It likely displays as `(base)` unless you've activated another environment.

1) Verifying the Conda Installation:
    * To check which conda installation you're using, type `which conda` in the terminal. The expected output should resemble: `/opt/conda/bin/conda`.
    * Verify the version of conda by using the command `conda --version`. You might see an output like conda `4.12.0`.

1) List Conda Environments:
    * Use the `conda env list` command to view all available conda environments. This list includes the environments we'll utilize for lectures, practice sessions, and homework assignments.

1) Kernel Detection and Selection:
    * If Jupyter doesn't automatically detect a kernel for the test code:
    * Click on the **kernel** label, located on the top right corner of your Jupyter notebook interface in VSCode.
    * For Python, choose **Select Another Kernel** followed by **Python Environments**. A list of available Python kernels will appear. Select the one labeled as `base` pointing to `/opt/conda/bin/python`.
    * For R, choose **Select Another Kernel** followed by **Jupyter Kernel**. A list of available kernels will appear. Select the one labeled as `R (base)` pointing to `/opt/conda/envs/tidy/lib/R/bin/R`.

### R
In VSCode, R is executed through Jupyter. If R is functioning as expected, you can skip the following details. For a comprehensive guide on R in VSCode, refer to the official documentation: https://code.visualstudio.com/docs/languages/r  

1) Environment activation:
    * We will use the tidy env for R, which can be activate with `conda activate tidy`.

1) Running R from the Command Line:
    * Inside the tidy environment you can run R directly from the commandline, which is helpful for installing new packages. Of note, the devcontainer already comes with most things you need and adding new packages can create conflicts, so be careful installing packages that you don't overwrite dependencies or install anything risky from a 3rd party developer. For now lets just determine which R we are running, which I will let you figure out using some of the above commands (see step 2). What happens if you run these commands outside the conda environment?

1) Setting the R Path in VSCode:
    * Determine the path of your R installation with the command: `which R`.
    * Navigate to the VSCode settings to update the Rterm path:
        - Open the settings in VSCode.
        - Search for `Rterm`.
        - Ensure you're within the Remote[Dev Container] context.
        - Paste the path you obtained from the `which R` command.
    * Upon configuration, your R path should be listed under available kernels. You can now select this kernel to execute the R test notebook.
