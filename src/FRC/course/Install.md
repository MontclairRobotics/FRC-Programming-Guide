# WPILib 

WPILib is the library provided to every team by FRC to make programming the robot easier. While there are versions of WPILib available for C++, python, and NI LabView, our team uses Java because we didn’t want to do memory management (rules out C++), the Python version is too new in our opinion, and we dislike LabView.

WPILib is open source software, and can be found [here](https://github.com/wpilibsuite/allwpilib).
---

   
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

To install the latest version of WPILib on your computer, go [here](https://github.com/wpilibsuite/allwpilib), then click on “Releases” on the right. Then, scroll down to where you see the different files available for download. Be sure that you don’t scroll to the previous release. Download the file corresponding to your OS.

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

---

After you have installed WPILib, if you are on Windows you may also want to install the FRC game tools from [this](https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-2/frc-game-tools.html) guide. 

---

After you have installed WPILib, you will notice that you now have two separate versions of VSCode on your computer: the one you installed regularly, and the one that has been installed with WPILib. You should program for robotics on the one installed with WPILib called “WPILib VS Code” as it has the latest version of WPILib available and will allow you to compile your code to test it.

Within the WPILib version of VSCode, click on the extensions button on the left. You should install:

* TODO Tree \- creates a list of //TODO comments in the code that you can jump to  
* Extension Pack for Java \- if after installation it tells you to install a JDK ignore it. WPILib comes with one.  
* Live Share \- lets two people collaborate on code like Google Docs  
* Better Comments \- allows you to color and highlight comments  
* Polacode \- OPTIONAL \- lets you take nice screenshots of your code  
* Vscode-pets \- 100% Necessary \- lets you put fun little bets in the bottom left corner of your VSCode window. Install this or leave.

---

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