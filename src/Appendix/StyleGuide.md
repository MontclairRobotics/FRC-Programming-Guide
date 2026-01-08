# Style Guide
This page provides the guidelines for how code should be formatted. Please refer to this page for information about where code should be placed, what methods of writing code are allowed, and how it should be structured. It is important to follow these rule to make the code clear and readable for our team.

## Code Structure
It is important to maintain a concrete code structure to organize our code and make it easily readable by others. These guidelines help us locate code by organizing it into neat folders and setting standards for where certain things are, such as controller bindings and constants. These guidelines are as follows:

- All subsystem objects are declared first at the top of RobotContainer.java and then subsequently instantiated in the constructor. Real vs simulated IO selection occurs only in RobotContainer during subsystem instantiation. Do not use RobotBase.isSimulation() or something similar inside a subsystem.
- All trigger bindings and default command settings must go in the configureBindings() method, which is called in the constructor of Robotcontainer.java.
- No logic in Robot.java, only things that pertain to setting up parts of the code (i.e. starting AdvantageKit's Logger).
- Folders created should have names in all lowercase
- All subsystems have their own folder which is java\frc\robot\subsystems. Each subsystem will have an IO interface, two IO implementation classes, and a logic class. Follow AdvantageKit's IO structure when writing subsystems. Subsystems must only interact with hardware through their IO interface. Logic classes must not reference motor controllers or sensors directly.
- All constants will be in the Constants.java file under java\frc\robot. Subclasses in Constants.java will house subsystem-specific constants. Use WPILib's Units library. No random numbers in classes without comments or being constants because these get extremely confusing when others read your code.
- Any complex (subjective) commands require their own class and should be in java\frc\robot\commands.
- All helper classes, either ones we write ourselves or take from online libraries, must be in java\frc\robot\util.
## Naming Conventions
Naming conventions are extremely important so that we have an agreed way to name everything. They also help with code readability, especially when debugging or reviewing others' code. The conventions are as follows:

Classes follow:
- A noun
- PascalCase: every word starts with a capital letter
    - Drivetrain
    - ArmIO
    - ElevatorIOSparkMax

Methods follow:
- Starts with a verb
- camelCase: every word starts with a capital letter except the first one
    - setTargetAngle()
    - resetEncoders()
    - isAtSetpoint()

Variables follow:
- camelCase
- should be descriptive
    - Not too vague, but also not too specific
- Good: 
    - leftEncoderPosition 
    - appliedVoltage
    - isFieldRelative
- Bad: 
    - x
    - y
    - z
    - thing1
    - theExactSpeedOfTheFlywheelWhenTheRobotScoresABall

Constants follow:
- SCREAMING_SNAKE_CASE: all caps with underscores to separate words
    - MAX_SPEED
    - MAX_EXTENSION
    - MIN_VELOCITY

Booleans follow:
- The same rules as the other variables
- should be prefixed with is, has, or should
- Examples:
    - isAligned
    - hasGamePiece
    - shouldClimb

## Units
Standardized units are extremely important to prevent calculation errors. Incorrect units are an extremely common error and can mess up PID, tuning, etc.

- We will use SI units for the most part (meters, seconds, kilograms)
- All units for numbers must be clear. Use WPILib's Units or Measure library.
- All angles must use Rotations, and interchange to radians or degrees only when necessary.
## Formatting
Formatting is also extremely important because it makes our code a lot easier to read and review. While some of these are trivial, do your best to follow most of these:

- 4-space indenting
- When writing in a new block of code (if-statement, method, class) you must indent everything. 
- Top brace remains on the same line as the block declaration (method, class, etc) with one space after the parenthesis
- Bottom brace is aligned with the block declaration
- No one line if-statements. These can be confusing at times. 
- Conditional statements/ternary operator ('?' paired with ':') are allowed but should use the following format:
    - variable = (condition)? valueIfTrue : valueIfFalse;
- If a line of code gets two long (goes off the screen), separate the logic / math onto another line with an indent or use a helper variable to make it more readable.
- Put decorator methods on a new line, also indented.
## Comments
Commenting is very helpful when debugging and reviewing code to understand the thought process at the time that a certain line was written.

- Comment non-obvious logic, control theory, math, etc. Simple getters/setters do not require comments
- Put a space after a one line comment
- Javadoc comment methods that are complex (this is subjective, so use your judgement)
- Comment the WHY, not the WHAT
    - Good: // Adding feedforward voltage to help counteract gravity experienced by the arm at low angles
    - Bad: // this sets the speed of the motor
