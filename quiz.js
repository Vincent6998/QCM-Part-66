const allQuestions = [

{
	"question": "Speed tape parameters (VMP/MMO/VMAX/VMIN) are calculated by:",
	"choices": [
		"A) The FMCF",
		"B) The PFC",
		"C) The WEU"
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "The CMS:",
	"choices": [
		"A) Generates long term reports for trend monitoring",
		"B) Provides detailed fault information to help in troubleshooting",
		"C) Generates Flight Deck Effects when applicable"
	],
	"correctAnswer": "B",
	"category": "ATA 45"
},
{
	"question": "The CMCF is located in:",
	"choices": [
		"A) The right AIMS",
		"B) The left AIMS",
		"C) The left and right AIMS"
	],
	"correctAnswer": "C",
	"category": "ATA 45"
},
{
	"question": "Wich dropdown menu has the Data Load submenu:",
	"choices": [
		"A) Line Maintenance",
		"B) Extended Maintenance",
		"C) Other Function"
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "A code such as 343 311 31 corresponds to:",
	"choices": [
		"A) An FDE related to ATA 34",
		"B) an ATA 34 Maintenance Message",
		"C) an ATA 31 Maintenance Message"
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "To quickly find data about a status message that appears during maintenance you should go to :",
	"choices": [
		"A) The Inbound FDE",
		"B) The Existing Faults",
		"C) The Existing FDE"
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "The Existing FDE menu shows:",
	"choices": [
		"A) The FDE and related MMSG currently active or latched",
		"B) only active FDE",
		"C) all active or latched minor and major failures"
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "A FDE can be :",
	"choices": [
		"A) any fault reported to the CMCS",
		"B) any fault reported by an LRU",
		"C) an EFIS Flag"
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "To find data about a Failure that occurred in flight but didn't cause an FDE you go to:",
	"choices": [
		"A) Present Leg Faults",
		"B) Existing FDE",
		"C) Inbound FDE"
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "The input monitoring of the CMCF can check:",
	"choices": [
		"A) ARINC 429, ARINC 629, analog variable and analog discrete signal",
		"B) ARINC 629 signals only",
		"C) ARINC 429 and 629 signals"
	],
	"correctAnswer": "A",
	"category": "ATA 45"
},
{
	"question": "The CMCS stores reports for :",
	"choices": [
		"A) 100 flight legs from 0 to -99",
		"B) 100 flights legs from 1 to 100",
		"C) 10 flights legs from 0 to 9"
	],
	"correctAnswer": "A",
	"category": "ATA 45"
},
{
	"question": "If you don't want to lose memorized reports when you replace a CPM/COM you need to:",
	"choices": [
		"A) save the reports with the MAT",
		"B) make sure the opposite AIMS cab stays energized during the CPM replacement",
		"C) nothing special if the opposite cabinet has no fault"
	],
	"correctAnswer": "C",
	"category": "ATA 45"
},
{
	"question": "The Existing FDE menu:",
	"choices": [
		"A) shows only minor faults",
		"B) shows only Status messages",
		"C) doesn't show minor faults"
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "On a B777 with AIMS 2 the CMCF is loaded in the :",
	"choices": [
		"A) CPM/STD",
		"B) CPM/COM",
		"C) IOM"
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "To select Input Monitoring from the CMCS main menu you click on:",
	"choices": [
		"A) Line Maintenance",
		"B) Extended Maintenance",
		"C) Other Function"
	],
	"correctAnswer": "C",
	"category": "ATA 45"
},
{
	"question": "If a Status Message appears during maintenance but doesn't show on the Present Leg Fault this is:",
	"choices": [
		"A) because PLF doesn't show FDE",
		"B) Due to flight phase screening",
		"C) not normal and you have to troubleshoot the CMCF"
	],
	"correctAnswer": "B",
	"category": "ATA 45"
},
{
	"question": "When the Maintenance Phase is Disabled from the Maintenance Enable/Disable page:",
	"choices": [
		"A) A new leg will begin at engine start",
		"B) The CMCF won't record any failure",
		"C) failures are normally recorded in the current flight leg"
	],
	"correctAnswer": "C",
	"category": "ATA 45"
},
{
	"question": "To reload previously saved Fault History:",
	"choices": [
		"A) you select Extended Maintenance/ Fault History",
		"B) you select Extended Maintenance/ Data Load",
		"C) you select Report/ Fault History"
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "The Other Function/ Shop Faults menu is used to:",
	"choices": [
		"A) send by ACARS real-time failures to the workshop",
		"B) to get BITE data memorized by the LRU",
		"C) do a special test requested by the shop"
	],
	"correctAnswer": "B",
	"category": "ATA 45"
},
{
	"question": "A System test :",
	"choices": [
		"A) is self-contained",
		"B) just checks interfaces of the replaced LRU",
		"C) is triggered automatically at each power up"
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "ACMF reports are stored in:",
	"choices": [
		"A) Volatile memory ",
		"B) A non-volatile memory",
		"C) A non-erasable memory"
	],
	"correctAnswer": "A",
	"category": "ATA 45"
},
{
	"question": "The QAR records data from:",
	"choices": [
		"A) The ACMF",
		"B) The DFDAF",
		"C) The CMCF"
	],
	"correctAnswer": "A",
	"category": "ATA 45"
},
{
	"question": "The ACMF software reset test:",
	"choices": [
		"A) saves the ACMF reports to a PCMCIA memory",
		"B) erases active ACMF data but keeps stored reports",
		"C) erases ACMF reports"
	],
	"correctAnswer": "C",
	"category": "ATA 45"
},
{
	"question": "The quick report page gives you:",
	"choices": [
		"A) a time history for a group of selected signals",
		"B) reports set with the Ground Based Software Tool",
		"C) data for input into the Boeing supplied airplane perf analysis program"
	],
	"correctAnswer": "A",
	"category": "ATA 45"
},
{
	"question": "The DFDAF send Data to:",
	"choices": [
		"A) The FDR",
		"B) The ACMF",
		"C) The QAR"
	],
	"correctAnswer": "A",
	"category": "ATA 45"
},
{
	"question": "The FDR is turned on by:",
	"choices": [
		"A) The ACMF",
		"B) The DFDAF",
		"C) The engine oil pressure"
	],
	"correctAnswer": "B",
	"category": "ATA 45"
},
{
	"question": "If the Left CPM/COMM fail the right DFDAF send data to the left CPM/COMM on:",
	"choices": [
		"A) ARINC 629",
		"B) ARINC 717",
		"C) Fiber optic"
	],
	"correctAnswer": "B",
	"category": "ATA 45"
},
{
	"question": "The printer receives print data from DCMF in:",
	"choices": [
		"A) The left AIMS",
		"B) The right AIMS",
		"C) Both AIMS"
	],
	"correctAnswer": "C",
	"category": "ATA 45"
},
{
	"question": "The WEU System Control:",
	"choices": [
		"A) The master warning light",
		"B) The MWL + ENG and APU fire lights",
		"C) The MWL + ENG + APU and CUTOFF switch lights"
	],
	"correctAnswer": "A",
	"category": "ATA 45"
},
{
	"question": "The Warning Electronic System controls:",
	"choices": [
		"A) the stab green band lamps",
		"B) the stab position indicator",
		"C) the flap lever position"
	],
	"correctAnswer": "A",
	"category": "ATA 45"
},
{
	"question": "The stall warning test is in:",
	"choices": [
		"A) ATA 31",
		"B) ATA 27",
		"C) ATA 29"
	],
	"correctAnswer": "B",
	"category": "ATA 45"
},
{
	"question": "The WEU get:",
	"choices": [
		"A) analog alert aural from GPWS, PWS and TCAS",
		"B) analog alerts aurals from GPWM and digital alert aurals from PWS and TCAS",
		"C) digital alert aurals from GPWS, PWS and TCAS"
	],
	"correctAnswer": "A",
	"category": "ATA 45"
},
{
	"question": "If at least 2 WEU channels send an altitude alert signal to AIMS:",
	"choices": [
		"A) the master warning light come on",
		"B) the master caution light come on",
		"C) a memo message come on"
	],
	"correctAnswer": "B",
	"category": "ATA 45"
},
{
	"question": "The 0 decibel reference for the WES Automatic audio gain is:",
	"choices": [
		"A) A/C parked engine on",
		"B) Low speed flight",
		"C) A/C parked engine off"
	],
	"correctAnswer": "B",
	"category": "ATA 45"
},
{
	"question": "The WEU make a take off attempt signal when:",
	"choices": [
		"A) a fuel CTL SW is in the run position and ENG at T/O thrust",
		"B) GND Spd increase V1",
		"C) the A/C is in takeoff config and N1 above idle"
	],
	"correctAnswer": "A",
	"category": "ATA 45"
},
{
	"question": "The autopilot disconnect warning aural alert:",
	"choices": [
		"A) can be canceled through the master warning light",
		"B) can be canceled through the autopilot disconnect switch",
		"C) is inhibited during takeoff and landing"
	],
	"correctAnswer": "B",
	"category": "ATA 45"
},
{
	"question": "Data used by WEU to calculate the green band are:",
	"choices": [
		"A) airplane Cross Weight, CG, and takeoff thrust rating",
		"B) nose ldg pressure transducer input the airplane CG",
		"C) nose LDG pressur transducer input+ horizontal stabilizer position"
	],
	"correctAnswer": "A",
	"category": "ATA 45"
},
{
	"question": "The ARINC 629 coupler allows?",
	"choices": [
		"A) To connect a computer to the bus.",
		"B) To connect a bus to another bus of the same type.",
		"C) To connect an ARINC 429 bus to an ARINC 629 bus."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "Switches data going to the OPAS shall be first?",
	"choices": [
		"A) Multiplexed.",
		"B) Demultiplexed.",
		"C) Demultiplexed, then multiplexed at destination."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "The major OPAS components are?",
	"choices": [
		"A) 1 OPCF, 1 PDCU and 2 OPBC.",
		"B) 1 OPCF, 1 PDCU AND 1 OPBC.",
		"C) 2 OPCF, 2 PDCU and 2 OPBC."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "OPAS abbreviation means?",
	"choices": [
		"A) Overhead panel ARINC 629 system.",
		"B) Onboard panel ARINC system.",
		"C) Onboard panel ARINC six two nine."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "OPAS inputs and outputs are as follows?",
	"choices": [
		"A) Switches and lights are simultaneously inputs and lights are outputs.",
		"B) Switches are inputs and lights are outputs.",
		"C) Switches and light could be both inputs and outputs."
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "The OPAS is linked to?",
	"choices": [
		"A) Fiber optic buses.",
		"B) ARINC 429 buses.",
		"C) ARINC 629 buses."
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "The power regulation in the SCF is as follows?",
	"choices": [
		"A) The linear regulator output power is sensed by the linear output \" monitor / control \".",
		"B) The linear monitor sends independent power supply to each member ARINC 629 system card in the SCF.",
		"C) The linear regulator sends power to the active 629 output bus."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "Left and Right system card files power supplies are as follows?",
	"choices": [
		"A) Both left and right SCF receive a hot bat bus.",
		"B) The left SCF receives hot bat bus and the right receives bat bus sec 2.",
		"C) Both left and right SCF receive a hot bat bus and bat bus sec 2."
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "The power control switches in the SCF?",
	"choices": [
		"A) Are discrete inputs to the \" linear regulators \".",
		"B) Are located on the outputs of the \" linear regulators \".",
		"C) Are inputs to the \" linear outputs monitor / control \"."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "The left system card file chassis (P85) provide data to?",
	"choices": [
		"A) To the left system ARINC 629 bus.",
		"B) To the left system and left flight control ARINC 629 bus.",
		"C) To the left and right systems ARINC 629 bus."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "Concerning the SCF, there are?",
	"choices": [
		"A) One SCF chassis",
		"B) Two SCF chassis",
		"C) Four SCF chassis"
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "The output data of an SCF chassis is transmitted on:",
	"choices": [
		"A) Optical bus.",
		"B) ARINC 429 buses.",
		"C) ARINC 629 buses."
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "While removing a card from the SCF chassis, one must make use of?",
	"choices": [
		"A) The ESDS.",
		"B) Isolated shoes.",
		"C) Isolated gloves."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "How many ARINC 629 buses are there on the B777-300?",
	"choices": [
		"A) Three.",
		"B) Seven.",
		"C) Eleven."
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "The AIMS sends ACARS data to the VHF Comm transceiver on?",
	"choices": [
		"A) ARINC 629.",
		"B) ARINC 429.",
		"C) ARINC 618."
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "The flight deck communication function (FDCF) is in?",
	"choices": [
		"A) CPM / GG.",
		"B) CPM / ACMF or CPM / Basic.",
		"C) CPM / Comm."
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "The purpose of the overhead panel ARINC 629 system (OPAS) is to:",
	"choices": [
		"A) Connect flight deck switches and lights to the ARINC 629 system.",
		"B) Change ARINC 429 data to ARINC 629 data.",
		"C) Connect the flight deck to the fiber optic network."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "A clock is on UTC , you loose the GPSs ( MMRs ) receivers :",
	"choices": [
		"A) The clock continue to display the time that is generated by AIMS .",
		"B) The clock display is interrupted , the pilot switches the clock to the internal mode .",
		"C) The clock will automatically switch to the internal mode ."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "Each AIMS cabinet sends the UTC time to ?",
	"choices": [
		"A) One clock ( left AIMS to left clock , right AIMS to right clock ) .",
		"B) Two clocks ( each AIMS sends data to the left and to right clock ) .",
		"C) Three clocks ( each AIMS sends data to the left , central and right clocks ) ."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "In AIMS cabinet: each of the backplane buses AX, AY, BX , BY is:",
	"choices": [
		"A) A serial bus requiring to be supplied (active bus)",
		"B) A parallel bus consisting of 16 data lines.",
		"C) A serial bus that does not require any supply (passive bus)"
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "Each MASTER WARNING LIGHT is wired to:",
	"choices": [
		"A) only one channel of one WEU",
		"B) both channels of only one WEU",
		"C) both channels of each WEU"
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "Each loudspeaker is wired to:",
	"choices": [
		"A) Only one channel of one WEU",
		"B) both channels of only one WEU",
		"C) both channels of each WEU"
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "AIMSII:Concerning the flight deck entry camera control selected picture and concerning the Ground Maneuver Camera System (GMCS) picture :",
	"choices": [
		"A) It is possible to display simultaneously any combination of these pictures on the ND and lower display unit",
		"B) It is impossible to display the same GMCS picture on two displays",
		"C) It is impossible to display the same flight deck entry camera picture on two displays"
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "AIMSII:Concerning the flight deck entry camera control:",
	"choices": [
		"A) Using three display units it is possible to display the pictures of the three cameras simultaneously",
		"B) It is only possible to display one camera picture on only one display unit",
		"C) It is possible to display the same flight deck entry camera picture on several display units"
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "AIMSII:Concerning the Ground Maneuver Camera System (GMCS):",
	"choices": [
		"A) It is possible to display simultaneously  just the left gear on the left ND and just the right gear on the right ND",
		"B) It is possible to display the same composite GMCS picture on three displays",
		"C) At most it is  possible to display the same Ground Maneuver Camera System picture  only on  both NDs"
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "AIMSII:The Display Select Panel   (DSP) is inoperative:",
	"choices": [
		"A) the selected Control Display Unit (CDU) allows the display of the Ground Maneuver Camera System (GMCS) picture",
		"B) the selected Control Display Units (CDU) allows the display of a flight deck entry camera picture",
		"C) the flight deck entry camera control pictures and  the Ground Maneuver Camera System (GMCS) picture could'nt be called any more"
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "The purpose of the warning electronic system (WES) is to:",
	"choices": [
		"A) supply to the maintenance crew the maintenance reports and messages.",
		"B) supply indications of incorrect airplane system conditions to the flight crew.",
		"C) supply advisory and status messages to the flight crew and to the maintenance crew."
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "The Airplane Information Management System AIMS cabinets get UTC and date from",
	"choices": [
		"A) The clock",
		"B) The multi mode receivers MMRs ",
		"C) The Flight Management System FMS"
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "The Flight Data Recorder System FDRS operates:",
	"choices": [
		"A) During any engine start",
		"B) After engine start, while any engine is running",
		"C) When the airplane is in the air, with both engine running "
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "The left AIMS cabinet sends DFDAF data to the FDR on:",
	"choices": [
		"A) An ARINC 429 data bus",
		"B) An ARINC 628 data bus",
		"C) An ARINC 717 data bus"
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "The Quick Access Recorder QAR stores data for:",
	"choices": [
		"A) 24 hours of recorded data",
		"B) 41 hours of recorded data",
		"C) Last 41 hours of recorded data"
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "In the MAT, ACMS standard menu, for trouble shooting, which of the page you can use to monitor a specific signal parameter in the real time",
	"choices": [
		"A) The MNEMONIC DATA page",
		"B) The QUICK REPORT page",
		"C) The TRACE LOG page"
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "During take off, the takeoff warning inhibit prevents:",
	"choices": [
		"A) All warning indications and alert indications",
		"B) Some warning indications and some alert indications",
		"C) Not important (flight crew distractions) warning indications and alert indications"
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "To make the master warning light MWL activation signal, WEU must receive at least:",
	"choices": [
		"A) One MWL arm signal",
		"B) Two MWL arm signals",
		"C) Three MWL arm signals"
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "These are Primary Display System (PDS) components:",
	"choices": [
		"A) Two Display Switching Panel, two Cursor Control Device (CCD) .",
		"B) Two Display Select Panel, two Control Display Units (CDUs) .",
		"C) Two Electronic Flight Instrument System (EFIS) control panels, a single Instrument Source Select Panel ( ISSP)."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "The WES receives ?",
	"choices": [
		"A) External digital audio signal .",
		"B) Digital audio from the TCAS and analog audio from the GPWS .",
		"C) External analog audio signals ."
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "When you select on the MAT , ground test , ATA 31 - WES , the following are available \" system test \":",
	"choices": [
		"A) \"Landing Configuration Warning\" , \"Stall Warning\" , \"Fire Test\" , \"Warning Tones\" .",
		"B) \"Landing Configuration Warning\" , \"Take Off Configuration Warning\" and \"Warning Electronic System\".",
		"C) \"Warning Electronic System\" , \"Stall Warning System\" , \"Altitude call out\" ."
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "The WES will provide illumination of  ?",
	"choices": [
		"A) The master warning lights .",
		"B) The master warning lights and some OPAS light on the overhead panel .",
		"C) The master warning lights , and the engines fuel cutoff levers lights ."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "The WES provides the necessary data to show  ?",
	"choices": [
		"A) Stab position and green band .",
		"B) The stabilizer green band .",
		"C) The stabilizer position indication ."
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "The WES has ?",
	"choices": [
		"A) 2 WEU .",
		"B) 3 WEU .",
		"C) 4 WEU ."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "On the B777-300 , which switch selects the ground maneuvering camera system display to a MFD ?",
	"choices": [
		"A) TCIU switch on the EFIS control panel .",
		"B) CAM switch on the DSP .",
		"C) Camera switch on the P5 ."
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "The hot battery bus supplies power to the AIMS cabinet for the :",
	"choices": [
		"A) Static random access memory in the line replaceable modules ( LRMs ) .",
		"B) Backplane data bus .",
		"C) ARINC 429 transmitters in the input / output modules ( IOMs )."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "Concerning the clocks ?",
	"choices": [
		"A) They receive the GPS time directly from the GPS sensor units .",
		"B) They receive the GPS time from the AIMS cabinets.",
		"C) They do not receive the GPS time , there are manually set ."
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "The FDR is ?",
	"choices": [
		"A) Water proof but not fire protected .",
		"B) Is fire protected but not water proof .",
		"C) Is water proof and fire protected ."
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "The printer uses ?",
	"choices": [
		"A) Roll paper .",
		"B) A4 separate sheets .",
		"C) A3 separate sheets ."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "Concerning the Display Units on the B777- 300 (Without any lost of any function):",
	"choices": [
		"A) All six DUs are interchangeable .",
		"B) An upper DU is interchangeable with a lower DU .",
		"C) A ND DU is interchangeable with a lower central DU ."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "Concerning the Display Units on the B777-300 (Without any lost of any function):",
	"choices": [
		"A) All six DUs are identical .",
		"B) A PFD DU is interchangeable with a ND DU.",
		"C) PFDs and upper central DU are interchangeable ."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "Each graphic separator sends data to ?",
	"choices": [
		"A) 2 DUs .",
		"B) 3 DUs .",
		"C) All 6 DUs ."
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "The AIMS backplane has :",
	"choices": [
		"A) 4  data bus.",
		"B) 3  data bus.",
		"C) 2  data bus."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "AIMS - 1: To load the FMCF (Flight Management Computing Function) of the right cabinet with the navigation data base , you must select the following destination:",
	"choices": [
		"A) CPM Basic .",
		"B) CPM Com",
		"C) CPM FM ."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "There is no fault and the PDS is fully functional; on the left ISSP (Instrument Source Select Panel) you select \"CAPT ALTN\" , therefore:",
	"choices": [
		"A) LOB (Captain PFD) and LIB (Captain ND) DUs  (Display Units) will switch to another graphic generator .",
		"B) None of the DUs will switch to another generator because there is no fault .",
		"C) The PFD image will switch to inboard DU ."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "In normal conditions; on the right Instrument Source Select Panel (ISSP), what happens when you set the F/O \"DSPL CTRL\" switch to \"ALTN\" ?",
	"choices": [
		"A) Right Outboard (ROB) and Right Inboard (RIB)  Display Units (DUs) will switch to another Graphic Generator (CPM/GG) .",
		"B) None of the Display Units (DUs)  will switch to another graphic generator (CPM/GG) because there is no fault .",
		"C) The Primary Flight Display (PFD) image will switch to inboard Display Unit (DU) ."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "The maintenance task maintenance page that shows the erasable status is generated by ?",
	"choices": [
		"A) The graphic generator .",
		"B) The CMCF .",
		"C) The WES ."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "A caution is usually detected by:",
	"choices": [
		"A) The graphic generator .",
		"B) The WES .",
		"C) The CMCF ."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "The altitude alert function is part of:",
	"choices": [
		"A) The WES .",
		"B) The PDS .",
		"C) The CMCF ."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "The stall warning test is selected from:",
	"choices": [
		"A) ATA system 31",
		"B) ATA system 22",
		"C) ATA system 27"
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "the alternate gear down dispatch switch is set to VMO, therefore ?",
	"choices": [
		"A) The maximum operating speed is limited by the flaps/slats configuration.",
		"B) The gear is activated by the alternate hydraulic system.",
		"C) The maximum operating speed or mach is decreased."
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "On the 777-200 , The airplane condition monitoring function ACMF is implemented in the following module ?",
	"choices": [
		"A) Left cabinet, CPM/ACMF.",
		"B) Right cabinet, CPM/ACMF.",
		"C) Left and right cabinets."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "An ACMS  ( Airplane Condition Monitoring System ) report summary provides:",
	"choices": [
		"A) The most important parameters of the reports.",
		"B) A list of the last reports of a specific type.",
		"C) The list of the various types of reports."
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "A quick report is used to:",
	"choices": [
		"A) trigger by manual request the real time memorization of the selected set of parameters.",
		"B) automatically trigger in flight the parameters memorization.",
		"C) display the list of failed equipments."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "The Captain's clock and the First Officer's clock get respectively power from :",
	"choices": [
		"A) Hot bat bus and bat bus .",
		"B) Captain flight instrument bus and First Officer flight instrument bus .",
		"C) Left DC bus and Right DC bus ."
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "For recording on the FDR , in case of failure of the left CPM COM , the right cabinet sends to the left DFDAF the data on ?",
	"choices": [
		"A) The intercabinet ARINC 629 buses .",
		"B) Analog buses .",
		"C) Arinc 717 buses."
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "The quality of the recorded data is monitored ?",
	"choices": [
		"A) Internally by the FDR processor .",
		"B) By sensing back to the DFDAF the recorded data for comparison .",
		"C) By comparison of the left and right DFDAFS ."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "The data to be printed is collected by ?",
	"choices": [
		"A) A CPM COM.",
		"B) The CPM Basic .",
		"C) The CPM Basic or the CPM ACMF ."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "On the printer the amber fail Light comes on ?",
	"choices": [
		"A) In case of failure that cannot be repaired on the line .",
		"B) In case of printer failure or in case of paper jam during print out .",
		"C) In case of active DCMF failure ."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "AIMS - 1 :The ACMF reports are normally stored in:",
	"choices": [
		"A) A volatile memory  (Need battery supply to keep Memory)",
		"B) A non volatile memory (Does not need any supply to keep Memory).",
		"C) A non erasable memory."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "AIMS - 1 : The \" left ACMF software reset test \" :",
	"choices": [
		"A) Erases the ACMF reports .",
		"B) Erases active data but not the stored reports .",
		"C) Does not erase the stored reports ."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "The AIMS modules have a hot insertion switch , it purpose is ?",
	"choices": [
		"A) To provide hot battery bus to the AIMS modules .",
		"B) To keep moderately hot the plugs in order to prevent icing when the airplane is left outside without power .",
		"C) To power the module after positive contact of the connectors pins ."
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "On the B777-200 , The loss of two power inputs from the same side of an AIMS cabinet will cause:",
	"choices": [
		"A) The loss of function in 4 LRMs .",
		"B) The loss of function of all the LRMs .",
		"C) No effect on the function of the LRMs ."
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "On the B777-200 , For proper operation an AIMS LRM must have one MAIN and one MONITOR power input , therefore ?",
	"choices": [
		"A) Within the four 28 v DC bus inputs , any two input are sufficient .",
		"B) Within the four 28 v DC bus inputs , any two inputs from the same side of the cabinet are sufficient .",
		"C) Within the four 28 v DC bus inputs , it is sufficient to have one input from each side of the cabinet ."
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "These are AIMS functions ?",
	"choices": [
		"A) Autopilot , flight management Primary display function .",
		"B) Airplane condition monitoring function , data conversion gateway function , data communication management .",
		"C) Environmental control function  , primary display function , autopilot  ."
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "On the B777-200 , The AIMS cabinet receive and transmit data only on these \" ARINC 629 buses \" ?",
	"choices": [
		"A) Intercabinet buses .",
		"B) Intercabinet buses and flight control buses .",
		"C) Intercabinet buses , flight control buses and system buses ."
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "The cursor Control Device light are wired to:",
	"choices": [
		"A) the OPAS",
		"B) the IOM",
		"C) the CPM/GG"
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "The alternate RH EFIS control panel function can be accessed from:",
	"choices": [
		"A) any CDU",
		"B) The Onside CDU",
		"C) The DSP"
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "If the Right EFIS CTL PNL and CDU are failed :",
	"choices": [
		"A) The F/O cannot control the EFIS anymore ",
		"B) the center CDU is a backup for a failed CDU for the EFIS control panel ",
		"C) the left EFIS CTL Panel control the Right EFIS"
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "A CPM/GG can generate:",
	"choices": [
		"A) 3 different display format : 1 essential and 2 critical ",
		"B) 2 different display format : 1 essential and 1 critical",
		"C) 3 different display format : 2 essential and 1 critical "
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "Snapchot created with the EICAS event switch are recorded by:",
	"choices": [
		"A) the CPM/GG",
		"B) the CMCS ",
		"C) the QAR"
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "On the B777-200 , You want to load the flight management computing function (FMCF) navigation database in the left AIMS cabinet. What line replaceable module (LRM) do you select as the destination LRM ?",
	"choices" :[
		"A) The core processor modules/communications (CPM/Comm).",
		"B) The input/output module (IOM) (M003) and IOM (M004).",
		"C) The core processor module. airplane condition monitoring function (CPM/ACMF)."
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "The purpose of the AIMS cabinet input/output modules (IOMs) is to :",
	"choices" :[
		"A) Supply the interface between the functions in the AIMS cabinet and external LRUs.",
		"B) Change ARINC 429 signals to ARINC 629 signals.",
		"C) Provide temporary data storage in memory."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "The central maintenance computing function software is in which of these AIMS cabinet line replaceable modules (LRMs) ?",
	"choices" :[
		"A) Maintenance access terminal (MAT) and portable maintenance access terminal (PMATs).",
		"B) Core processor modules/communications (CPM/Comm).",
		"C) Core processor modules/graphics generators (CPM/GGs)."
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "A multi-function display (MFD) format can show in which display unit location ?",
	"choices" :[
		"A) Left outboard.",
		"B) Right inboard.",
		"C) Upper center."
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "You can manually switch EICAS formats to which Display Unit ?",
	"choices" :[
		"A) Lower center only.",
		"B) Right inboard or Left outboard.",
		"C) Right inboard or Left inboard."
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "Each active AIMS core processor module/graphics generator (CPM/GG) sends outputs through a coaxial coupler to:",
	"choices" :[
		"A) Three display units.",
		"B) Two display units.",
		"C) Six display units."
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "EICAS is in the limited mode of operation. On the display select panel (DSP), which switches are still active ?",
	"choices" :[
		"A) STAT, ELEC and HYD switches.",
		"B) ENG, HYD and FCTL switches.",
		"C) ENG, AIR and FUEL switches."
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "Which type of crew messages has the lowest priority ?",
	"choices" :[
		"A) Memo messages.",
		"B) Status messages.",
		"C) Com messages."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "Before you install new display unit in the center lower position, you must  ?",
	"choices" :[
		"A) Move the control column.",
		"B) Turn the display unit 180 degrees.",
		"C) Remove the center upper display unit first."
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "On the B777-200 , The core processor module/airplane condition monitoring function (CPM/ACMF) module is in the  ?",
	"choices" :[
		"A) Right AIMS cabinet.",
		"B) Left AIMS cabinet.",
		"C) Left and right AIMS cabinets."
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "The flight data recorder (FDR) records the most recent  ?",
	"choices" :[
		"A) 25 hours of flight.",
		"B) 50 hours of flight.",
		"C) 75 hours of flight."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "The flight data recorder (FDR) is in the  ?",
	"choices" :[
		"A) E2-1 rack in the main equipment center.",
		"B) E8 equipment rack.",
		"C) E7 aft equipment rack."
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "The printer receives operational software data loads from the  ?",
	"choices" :[
		"A) Directly from the maintenance access terminal (MAT ).",
		"B) Right AIMS cabinet only.",
		"C) Left AIMS cabinet only."
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "The printer receives print data from the :",
	"choices" :[
		"A) Right AIMS cabinet only.",
		"B) Left or right AIMS cabinet.",
		"C) Left AIMS cabinet only."
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "You erase latched status messages from the ?",
	"choices" :[
		"A) Engine exceedance maintenance page.",
		"B) Performance maintenance page.",
		"C) Maintenance task maintenance page."
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "A control display unit (CDU) failure causes:",
	"choices" :[
		"A) A CDU FAIL message to show on the scratchpad.",
		"B) The failed control display unit (CDU) to go blank.",
		"C) A memo message to show on the EICAS display."
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "In transit, an SMT ( Scheduled Maintenance Task ) newly appeared ; could you dispatch the aircraft ?",
	"choices" :[
		"A) Yes, if there is no status.",
		"B) No, I must erase it before dispatch.",
		"C) No, the associated repair must be done before dispatch."
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "How many WEU ( warning electronic unit ) are available ?",
	"choices" :[
		"A) 2, each having two channels.",
		"B) 3, each having two channels.",
		"C) 4,"
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "The following functions are computed by the WES (warning electronic system) ?",
	"choices" :[
		"A) All caution messages.",
		"B) Activation of the two warning lights and the two caution lights.",
		"C) Stall warning; landing configuration warning; T/O configuration warning."
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "To trigger the shakers actuators ?",
	"choices" :[
		"A) Any two channels must agree",
		"B) Both channels in the same warning electronic unit WEU must agree.",
		"C) At least one channel in each unit must agree."
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "Axle jacking can be done from:",
	"choices" :[
		"A) 1 point on each landing gear",
		"B) 2 points on each landing gear",
		"C) 7 different points"
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "For airplane leveling you can use:",
	"choices" :[
		"A) The plumb bob scale in the right main wheel weel",
		"B) The related special function ion CMCF",
		"C) The ATA 32 Maintenance page"
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "Tow fitting can be installed:",
	"choices" :[
		"A) on the nose landing gear only ",
		"B) at the forward part of the nose ldg gear and main ldg gear ",
		"C) at the forward and aft parts of both nose and main lanfing gear"
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "The left and right system Carfile provide data to:",
	"choices" :[
		"A) The left and right Arinc 429 buses",
		"B) The left and right Systems Arinc 629 buses",
		"C) The left and right Flight Controls  Arinc 629 buses"
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "The 7 power control switches give a grounf to:",
	"choices" :[
		"A) The Linear Output Monitor/Control circuit",
		"B) The 7 Linear Regulator",
		"C) The preregulator"
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "The Preregulator of the System Card Files are powered by:",
	"choices" :[
		"A) The Bat bus section 2",
		"B) The hot bat bus",
		"C) The 28V DC Left Main Bus"
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "The SCF Linear Regulators:",
	"choices" :[
		"A) Are powered by the Linear Output Monitor/Control",
		"B) supply power to Linear Output Monitor/Control",
		"C) are monitored by the Linear Output Monitor/Control"
	],
	"correctAnswer": "C",
	"category": "ATA 31"
},
{
	"question": "Both SCF Linear Monitor CArds are normally powered by:",
	"choices" :[
		"A) Preregulator 1",
		"B) Preregulator 2",
		"C) Both Preregulator"
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "The Preregulator 2 of the SCF are powered by:",
	"choices" :[
		"A) The Hot bat bus",
		"B) The 28V DC RH Main Bus of RSCf and the Bat bus section 2 for LSCF",
		"C) The 28V DC LH Main bus of LSCF and the Bat Bus section 2 of RSCF"
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "The SCF Arinc Signal gateway (ASG) cards change:",
	"choices" :[
		"A) Arinc 429 to 629 and vice versa",
		"B) Arinc 429 to 629 only",
		"C) Arinc 629 to many different Aring language"
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
	"question": "Output data from SCF is transmitted by:",
	"choices" :[
		"A) Arinc 429 buses",
		"B) Arinc 629 buses",
		"C) Fiber optic"
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "SCF member system cards are directly powered by:",
	"choices" :[
		"A) The preregulator",
		"B) The linear regulator",
		"C) The linear Output Monitor/Control"
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "An AIMS cabinet is connected to all theses Arinc 629 Buses:",
	"choices" :[
		"A) Systems",
		"B) Systems and Flight Control",
		"C) Systems, Flight Controls and intercabinet"
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "To dataload the ACMF in a AIMS 2 cabinet you select:",
	"choices" :[
		"A) the IOMs",
		"B) the CPM STD",
		"C) The CPM COMM"
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "Each CPM is able to compute:",
	"choices" :[
		"A) FMCF and TMCf",
		"B) DCGF and UTCF",
		"C) ACMF and CMCF"
	],
	"correctAnswer": "B",
	"category": "ATA 31"
},
{
	"question": "The Power Conditioning Modules supply:",
	"choices" :[
		"A) all CPM and IOM power demands in the left or right AIMS",
		"B) all CPM and IOM backup power demand in both AIMS",
		"C) 115VAC to the CPMGG to keep DU ON if MAin AC Buses are lost"
	],
	"correctAnswer": "A",
	"category": "ATA 31"
},
{
    "question": "The inboard DU normally display:",
    "choices": [
        "A) Nd or Mfd format",
        "B) EICAS format",
        "C) PFD format"
    ],
    "correctAnswer": "A",
    "category": "ATA 31"
},
{
    "question": "To install a lower center DU you have to :",
    "choices": [
        "A) Remove the upper Du first",
        "B) move the control column rearward",
        "C) Turn the DU by 180*"
    ],
    "correctAnswer": "C",
    "category": "ATA 31"
},
{
    "question": "Data display on ND and PFD are controlled by:",
    "choices": [
        "A) EFIS Control Panel",
        "B) Display Control Panel",
        "C) Instrument Source Selected Panel"
    ],
    "correctAnswer": "A",
    "category": "ATA 31"
},
{
    "question": "The EICAS format can manually be switched to:",
    "choices": [
        "A) The lower center DU",
        "B) either the left or right inboard DU",
        "C) either the left or right outboard DU"
    ],
    "correctAnswer": "B",
    "category": "ATA 31"
},
{
    "question": "If the DSP is selected to a DU which is displaying EICAS:",
    "choices": [
        "A) Only the ENG and STAT format select switches remain active",
        "B) Only the ENG, FUEL and AIR format select switch remain active ",
        "C) Only the HYD, ELEC, FUEL and AIR format select switch remain active"
    ],
    "correctAnswer": "B",
    "category": "ATA 31"
},
{
    "question": "A CPM/GG normally sends DATA to:",
    "choices": [
        "A) a pair of Display Unit (on the same side : LH, CTR, or RH)",
        "B) 3 Display Unit ",
        "C) all display Unit"
    ],
    "correctAnswer": "A",
    "category": "ATA 31"
},
{
    "question": "If there is no PDS fault and you select the ALTN position on the RH ISSP DSPL CTRL switch:",
    "choices": [
        "A) nothing change ",
        "B) the PFD format moves to the RH INBD DU",
        "C) the RH INBD AND OUTBD DU switch to another CPM/GG"
    ],
    "correctAnswer": "C",
    "category": "ATA 31"
},
{
    "question": "The forward section of fuselage is :",
    "choices": [
        "A) Section 41",
        "B) Section 47",
        "C) Section 48"
    ],
    "correctAnswer": "A",
    "category": "ATA 31"
},
{
    "question": "The aft section of fuselage is :",
    "choices" :[
        "A) Section 41",
        "B) Section 47",
        "C) Section 48"
    ],
    "correctAnswer": "C",
    "category": "ATA 31"
},
{
    "question": "Fuselage station are numbered:",
    "choices" :[
        "A) From the front to the aft",
        "B) From the aft to the front",
        "C) From the left to the right"
    ],
    "correctAnswer": "A",
    "category": "ATA 31"
},
{
    "question": "How many barrel sections does the fuselage have:",
    "choices" :[
        "A) 5",
        "B) 6",
        "C) 7"
    ],
    "correctAnswer": "B",
    "category": "ATA 31"
},
{
    "question": "How many manufacturing sections does the fuselage have:",
    "choices" :[
        "A) 5",
        "B) 6",
        "C) 7"
    ],
    "correctAnswer": "C",
    "category": "ATA 31"
},
{
    "question": "The system card files are located:",
    "choices" :[
        "A) in the flight deck",
        "B) in the Main Equipment Center ",
        "C) in the aft cargo compartment"
    ],
    "correctAnswer": "B",
    "category": "ATA 31"
},
{
    "question": "How many major zones does the B777 have ?:",
    "choices" :[
        "A) 6",
        "B) 7",
        "C) 8"
    ],
    "correctAnswer": "C",
    "category": "ATA 31"
},
{
    "question": "The major zone 800 related to:",
    "choices" :[
        "A) Wings",
        "B) Landing gears and landing gears doors",
        "C) Passenger and cargo compartment doors"
    ],
    "correctAnswer": "C",
    "category": "ATA 31"
},
{
    "question": "For airplane jacking there are:",
    "choices" :[
        "A) 3 primary and 5 auxilary jack points",
        "B) 4 primary and 4 auxilary jack points",
        "C) 5 primary and 3 auxilary jack points"
    ],
    "correctAnswer": "A",
    "category": "ATA 31"
},
{
    "question": "Adapters for jacking must be installed at:",
    "choices" :[
        "A) all jack points",
        "B) all the auxiliary jack points",
        "C) 3 auxiliary jack points D,E,F only"
    ],
    "correctAnswer": "B",
    "category": "ATA 31"
},	
  ];

let currentQuestion = 0;
let score = 0;
let timer;
let selectedQuestions = [];
let usedQuestions = JSON.parse(localStorage.getItem('usedQuestions')) || [];
let allQuestionsCopy = [...allQuestions];
let questions = [];
const numberOfQuestions = 20;

function filterQuestionsByCategory(categories) {
    return allQuestions.filter(question => categories.includes(question.category));
}

function displayCategories() {
    let categories = [...new Set(allQuestions.map(question => question.category))];
    let categoriesHTML = categories.map(category => `<label><input type="checkbox" value="${category}">${category}</label>`).join("");
    let categoriesElement = document.getElementById("categories");
    if (categoriesElement) {
        categoriesElement.innerHTML = categoriesHTML;
    }
}

document.getElementById("startButton").addEventListener("click", function() {
    let selectedCategories = Array.from(document.querySelectorAll("#categories input:checked")).map(input => input.value);
    if (selectedCategories.length === 0) {
        alert("Veuillez sélectionner au moins une catégorie.");
        return;
    }
    startQuiz(selectedCategories);
});

function startQuiz(selectedCategories) {
    selectedQuestions = filterQuestionsByCategory(selectedCategories);
    allQuestionsCopy = [...selectedQuestions];
    currentQuestion = 0;
    score = 0;
    shuffleQuestions();
    document.getElementById("startButton").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    displayQuestion();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function shuffleQuestions() {
    if (allQuestionsCopy.length === 0) {
        allQuestionsCopy = [...usedQuestions];
        usedQuestions = [];
    }
    shuffleArray(allQuestionsCopy);
    questions = allQuestionsCopy.slice(0, numberOfQuestions);
    usedQuestions = usedQuestions.concat(questions);
    localStorage.setItem('usedQuestions', JSON.stringify(usedQuestions));
}

function displayQuestion() {
    if (currentQuestion >= questions.length) {
        displayFinalResult();
    } else {
        const quizElement = document.getElementById("quiz");
        const question = questions[currentQuestion];
        let choicesHTML = "";

        question.choices.forEach((choice, index) => {
            choicesHTML += `<div class="choice"><label><input type="radio" name="choice" value="${String.fromCharCode(65 + index)}"> ${choice}</label></div>`;
        });

        quizElement.innerHTML = `<p class="question">Question ${currentQuestion + 1}: ${question.question}</p>${choicesHTML}<button onclick="checkAnswer()">Soumettre</button><button id="nextButton" onclick="nextQuestion()" disabled>Question suivante</button>`;
    }
}

function checkAnswer() {
    const selectedChoice = document.querySelector("input[name='choice']:checked");

    if (selectedChoice) {
        const selectedValue = selectedChoice.value.trim();
        const correctAnswer = questions[currentQuestion].correctAnswer.trim();

        const isCorrect = selectedValue === correctAnswer;
        showResult(isCorrect, selectedChoice);

        const choices = document.querySelectorAll("input[name='choice']");
        choices.forEach((choice) => {
            choice.disabled = true;
        });
        document.getElementById("nextButton").disabled = false;

        clearTimeout(timer);
        startTimer();
    } else {
        alert("Veuillez sélectionner une réponse.");
    }
}

function showResult(isCorrect, selectedChoice) {
    const choices = document.querySelectorAll("input[type='radio']");
    const correctChoice = questions[currentQuestion].correctAnswer;

    choices.forEach((choice) => {
        choice.disabled = true;
        const label = choice.parentNode;
        if (choice.value === correctChoice) {
            label.style.color = "green";
            label.innerHTML += "  <span>&#9989;</span>";
        } else if (choice.checked) {
            label.style.color = "red";
            label.innerHTML += "  <span>&#10060;</span>";
        }
    });

    if (isCorrect) {
        score++;
        displayMessage("Bonne réponse!", "green");
    } else {
        displayMessage(`Mauvaise réponse. La bonne réponse est la réponse ${correctChoice}.`, "red");
    }
}

function displayMessage(message, color) {
    const messageElement = document.createElement("p");
    messageElement.style.color = color;
    messageElement.textContent = message;
    const quizElement = document.getElementById("quiz");
    quizElement.appendChild(messageElement);
}

function startTimer() {
    timer = setTimeout(nextQuestion, 5000);
}

function nextQuestion() {
    clearTimeout(timer);
    currentQuestion++;
    displayQuestion();
}

function displayFinalResult() {
    const quizElement = document.getElementById("quiz");
    const percentage = (score / questions.length) * 100;
    const finalResult = `Quiz terminé ! Votre score est : ${score} / ${questions.length} (${percentage.toFixed(2)} %)`;
    quizElement.innerHTML = finalResult;

    if (percentage >= 75) {
        quizElement.innerHTML += `<p>BRAVO ! Vous avez réussi le test avec un score de réussite de ${percentage.toFixed(2)} %.</p>`;
    }
    quizElement.innerHTML += "<button onclick='restartQuiz()'>Recommencer</button>";
}

function restartQuiz() {
    console.log("Restarting quiz...");
    currentQuestion = 0;
    score = 0;
    document.getElementById("quiz").innerHTML = "";
    displayCategories();
    document.getElementById("startButton").style.display = "block";
    document.getElementById("quiz").style.display = "none";
}

displayCategories();

