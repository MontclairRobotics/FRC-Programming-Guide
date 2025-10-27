# WPILib 

WPILib is the library provided to every team by FRC to make programming the robot easier. While there are versions of WPILib available for C++, python, and NI LabView, our team uses Java because we didn’t want to do memory management (rules out C++), the Python version is too new in our opinion, and we dislike LabView.

WPILib is open source software, and can be found [here](https://github.com/wpilibsuite/allwpilib).
---

## Install
   
In addition to the main java library which much of this chapter will cover, WPILib comes with:

* **Shuffleboard and SmartDashboard**  
  * Display Debug information  
  * Show camera feeds and sensor readings to drivers  
  * Allow drivers to change pre-programmed settings  
* SysId  
  * Used to tune feedforward control for subsystems  
* **Glass**  
  * Used to debug the robot  
  * Can be used to view networktables data, or data being exchanged between different systems on the robot with each other and the driver station  
* And a few other tools that we don’t use.

Of these tools, glass and shuffleboard are the ones that we use the most.

---
You must install a new version of VScode with WPILib :(

To install the latest version of WPILib on your computer, go [here](https://docs.wpilib.org/en/latest/docs/zero-to-robot/step-2/wpilib-setup.html) and hit download. Then, download the file corresponding to your OS.

Windows:

* Download the .iso file  
* When it’s done, right click it and hit “mount”  
* Run the WPILib installer  
* Select “Everything”, then choose who you want to install it for  
* Selected “Download for this computer only”  
* Finish the installation

Macos:

* Download the .dmg file (Intel or Arm64 depending on your computer)  
* Run the installer  
* Select “Everything” and click “Install for this user”  
* Select “Download for this computer only”  
* Finish the installation

Linux (Ubuntu):

* Download .tar.gz file  
* Extract it  
* Run WPILibInstaller  
* (if you got this far, you already know what you're doing on Linux, but since this guide is for beginners, it will not be further elaborated)

## Setup

After you have installed WPILib, if you are on Windows you may also want to install the FRC game tools from [this](https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-2/frc-game-tools.html) guide. If you are not on windows that's okay because windows sucks but you won't be able to control the robot through you're computer via "Driver Station".

<div class="warning">

Auto Save

Go to the menus in the upper right > File > Click on "Auto Save"

This makes sure that your code is saved to your computer automatically meaning that you don't have to manually save to code to be able to use it on git and you don't lose it accidentally.

</div>

After you have installed WPILib, you will notice that you now have two separate versions of VSCode on your computer: the one you installed regularly, and the one that has been installed with WPILib. You should program for robotics on the one installed with WPILib called “WPILib VS Code” as it has the latest version of WPILib available and will allow you to compile your code to test it.

Within the WPILib version of VSCode, click on the extensions button on the left. You can install:

* TODO Tree \- creates a list of //TODO comments in the code that you can jump to  
* Extension Pack for Java \- if after installation it tells you to install a JDK ignore it. WPILib comes with one.  
* Live Share \- lets two people collaborate on code like Google Docs  
* Better Comments \- allows you to color and highlight comments  
* Polacode \- OPTIONAL \- lets you take nice screenshots of your code  
* Vscode-pets \- 100% Necessary \- lets you put fun little bets in the bottom left corner of your VSCode window. Install this or leave.
* Any others that you like (I have a lot)

## Commands

You should see a little WPILib symbol in the top right. If you click on it, it will allow you to use commands.
A few important ones are:
* Build robot code - This compiles your code
* Simulate robot code - Starts up the simulation
* Deploy robot code - Builds & sends the code to the robot (if you are connected to it)

## PathPlaner

You should also install PathPlanner, which is a piece of software written by another team that lets us draw paths onto the field, and play them during the autonomous period with a bit of tuning. 

Windows: 

* Install from the Microsoft Store [here](https://www.microsoft.com/en-us/p/frc-pathplanner/9nqbkb5dw909?cid=storebadge&ocid=badge&rtc=1&activetab=pivot:overviewtab)  
* Or download manually [here](https://github.com/mjansen4857/pathplanner/releases)

MacOS:

* Install from the App Store [here](https://apps.apple.com/us/app/frc-pathplanner/id1593046876)  
* Or download manually [here](https://github.com/mjansen4857/pathplanner/releases)

Linux:

* Download manually [here](https://github.com/mjansen4857/pathplanner/releases)  
* Continue as standard Linux installations go.

---