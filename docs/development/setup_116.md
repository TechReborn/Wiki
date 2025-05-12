![wrench.png](/media/mods/techreborn/wrench.png){.align-right width="200" query="?nolink&200"} =======Setting up a development environment=======

This guide is intended for people wishing to help with the creation of the mod. It assumes you know the basics of git and java.

## Requirements

- Java Development Kit version 8 (<https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html>)
- Intelij Idea, you can also use eclipse but that isn't covered. (<https://www.jetbrains.com/idea/download/#section=windows>)
- Git (<https://git-scm.com/download/win>)
- This guide covers MS Windows setup. Sorry.

## Setup Reborn Core

If you are not planning to make changes to Reborn Core just skip this section

1.  Open InteliJ IDEA and Create a new project from Source control ![step1.png](/gallery>development/step1.png){query="?lightbox"}
2.  Clone Reborn Core repo (<https://github.com/TechReborn/RebornCore.git>)
3.  Refresh Gradle project ![step2.png](/gallery>development/step2.png){query="?lightbox"}
4.  Generate sources for dependencies ![step3.png](/gallery>development/step3.png){query="?lightbox"}
5.  Open the `Gradle Settings` dialog from the Gradle tab. Change the `Build and run using` and `Run tests using` fields to 'IntelliJ IDEA'.
6.  Go to `File → Project Structure → Project` and set `Project compiler output` to \$PROJECT_DIR\$/out

## Setup Tech Reborn

Steps are same as for RC.

1.  Open InteliJ IDEA and Create a new project from Source control ![step2-1.png](/gallery>development/step2-1.png){query="?lightbox"}
2.  Clone Reborn Core repo (<https://github.com/TechReborn/TechReborn.git>)
3.  Refresh Gradle project
4.  Generate sources for dependencies
5.  Open the `Gradle Settings` dialog from the Gradle tab. Change the `Build and run using` and `Run tests using` fields to 'IntelliJ IDEA'.
6.  Go to `File → Project Structure → Project` and set `Project compiler output` to \$PROJECT_DIR\$/out

## Setup RC as TR module

Skip this section if you are not going to make changes to RC

1.  Go to `File → Project Structure → Modules` then click on + button and select `Import Module` ![step3-1.png](/gallery>development/step3-1.png){query="?lightbox"}
2.  Select RebornCore folder and then `Import module from external model` and choose Gradle
3.  Close `Project Structure` and refresh Gradle project
4.  Reopen `File → Project Structure → Modules` then select `main` module of TR and go to `Dependencies` tab
5.  Remove RebornCore dependency from Gradle and add RebornCore dependency from module ![step3-2.png](/gallery>development/step3-2.png){query="?lightbox"}
6.  You will have to repeat step above if you will refresh TR Gradle project.
