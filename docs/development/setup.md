![wrench.png](/media/mods/techreborn/wrench.png){.align-right width="200" query="?nolink&200"} =======Setting up a development environment for MC 1.12 =======

This guide is intended for people wishing to help with the creation of the mod. It assumes you know the basics of git and java.

## Requirements

- Java Development Kit version 8
- Intelij Idea, you can also use eclipse but that isnt covered.
- Git

## Setting up using gradle

1.  Fork the repo and clone to your computer
2.  Browse to the folder that you cloned down.
3.  While holding shift right click and click on Open command window here: ![setup_1.png](/gallery>/setup_1.png){query="?lightbox"}
4.  In the command window that opnes type: "gradlew setupDecompWorkspace idea" without the quotes ![setup_2.png](/gallery>/setup_2.png){query="?lightbox"}
5.  Press enter and wait for the proccess to finish, this could take some time. The time will depend of your computer power and internet speed. It is also a **lot** slower if it your first time using gradle. ![setup_3.png](/gallery>/setup_3.png){query="?lightbox"}
6.  Next you want to open Intelij and press on open. This may be located in the file menu at the top. You will want to select the .ipr file, to ensure idea finds the required project files.![setup_4.png](/gallery>/setup_4.png){query="?lightbox"}
7.  Intelij will now start to index the project, this will take some time on slow computers and/or if it is your first time. You can see the progress at the bottom of the window ![setup_5.png](/gallery>/setup_5.png){query="?lightbox"}
8.  The next thing you want to do is find a drop down menu on a toolbar near the top right of the window, and select minecraft client. Once that has been selected press the green play button to run the project, or the green bug to debug the project. ![setup_6.png](/gallery>/setup_6.png){query="?lightbox"}
9.  Minecraft should now load with TechReborn running from source. ![setup_7.png](/gallery>/setup_7.png){query="?lightbox"}
