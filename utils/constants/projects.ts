import type { Project } from "../../types";

export const PROJECTS: Project[] = [
  {
    title: "Tetris",
    description: "A browser-based Tetris implementation using pure HTML/JavaScript with div elements instead of Canvas. Features include shape rotation using pivot points, shadow projections, classic Tetris random selection method, score counter prioritizing tetrises, increasing speed, line clearing mechanics, and mobile swipe controls.",
    shortDescription: "A classic Tetris implementation with modern web technologies and mobile support.",
    technologies: ["HTML", "JavaScript", "CSS"],
    displayMedia: {
      type: "image",
      url: "tetris/tetris.PNG",
      alt: "Tetris game interface"
    },
    media: [
      {
        type: "image",
        url: "tetris/tetris.gif",
        alt: "Tetris gameplay demonstration"
      },
      {
        type: "image",
        url: "tetris/tetris.PNG",
        alt: "Tetris game interface"
      }
    ],
    githubUrl: "https://github.com/tuckajdooleh/tetris",
    liveUrl: "https://tuckajdooleh.github.io/eportfolio/projects/tetris/tetris.html"
  },
  {
    title: "Traveling Salesman Corn Maze Pathfinding Program",
    description: "A Python program that solves the Traveling Salesman Problem for a corn maze with multiple coupon stations. The program converts maze images to binary values, implements both BFS and A* pathfinding algorithms, and calculates the optimal route through all points. Features visualizations of the pathfinding process with animated demonstrations of both algorithms.",
    shortDescription: "Advanced pathfinding algorithm for solving corn maze navigation efficiently with multiple waypoints.",
    technologies: ["Python"],
    displayMedia: {
      type: "image",
      url: "CornMaze/result.PNG",
      alt: "Corn maze pathfinding visualization"
    },
    media: [
      {
        type: "image",
        url: "CornMaze/AStar.gif",
        alt: "A* pathfinding algorithm visualization"
      },
      {
        type: "image",
        url: "CornMaze/BFS.gif",
        alt: "BFS pathfinding algorithm visualization"
      },
      {
        type: "image",
        url: "CornMaze/result.PNG",
        alt: "Final pathfinding result"
      }
    ],
    githubUrl: "https://github.com/tuckajdooleh/CornMaze",
    liveUrl: "https://tuckajdooleh.github.io/eportfolio/projects/CornMaze/CornMaze.html"
  },
  {
    title: "Online Multiplayer Texas Hold'em Poker Website",
    description: "A web-based multiplayer poker platform created during COVID-19 quarantine, featuring custom room creation, full game logic implementation, and real-time player interaction using Socket.IO. The project evolved from a simple card-dragging interface to a fully automated game system with proper poker rules and betting mechanics. Built with Node.js and modern web technologies, though currently has some known issues with Safari compatibility and room management.",
    shortDescription: "Real-time multiplayer poker game with complete game mechanics and custom rooms.",
    technologies: ["Node.js", "Express.js", "Socket.IO", "HTML", "JavaScript", "CSS", "Bootstrap"],
    displayMedia: {
      type: "image",
      url: "poker/poker.PNG",
      alt: "Poker game interface"
    },
    media: [
      {
        type: "image",
        url: "poker/poker2.PNG",
        alt: "Poker room creation interface"
      },
      {
        type: "image",
        url: "poker/poker.PNG",
        alt: "Poker game interface"
      }
    ],
    githubUrl: "https://github.com/tuckajdooleh/poker",
    liveUrl: "https://tuckajdooleh.github.io/eportfolio/projects/poker/poker.html"
  },
  {
    title: "Spotify Group Listening (Using API)",
    description: "A collaborative music listening platform that enables group control of a host's Spotify playback. Built with Spotify's API, the application features secure authentication, custom playlist creation, real-time song control, and a search interface. The system uses unique room IDs for session management and Socket.IO for real-time communication, making it ideal for road trips and group listening sessions. Unlike Spotify's native group features, this app allows non-Spotify users to participate in sessions.",
    shortDescription: "Collaborative music control platform using Spotify's API for group listening experiences.",
    technologies: ["Node.js", "Express.js", "Socket.IO", "HTML", "JavaScript", "CSS", "Bootstrap", "Spotify API"],
    displayMedia: {
      type: "image",
      url: "spotifyapi/spotifyapi2.PNG",
      alt: "Spotify group listening interface"
    },
    media: [
      {
        type: "image",
        url: "spotifyapi/spotifyapi.PNG",
        alt: "Spotify group creation interface"
      },
      {
        type: "image",
        url: "spotifyapi/spotifyapi2.PNG",
        alt: "Spotify group listening main interface"
      },
      {
        type: "image",
        url: "spotifyapi/spotifyapi3.png",
        alt: "Spotify search and playlist interface"
      }
    ],
    githubUrl: "https://github.com/tuckajdooleh/spotifyapi",
    liveUrl: "https://tuckajdooleh.github.io/eportfolio/projects/spotifyapi/spotifyapi.html"
  },
  {
    title: "Spotify Group Listening (Using Selenium)",
    description: "An innovative approach to collaborative music control using web automation. The system combines a Python/Selenium script for Spotify web player automation with a Node.js web interface for song requests. The Python component automatically logs into Spotify and monitors a text file for new song requests every 2 seconds, while the Node.js/Socket.IO frontend provides a user-friendly interface for party guests to add songs to the queue without needing Spotify access.",
    shortDescription: "Automated music synchronization using Selenium web automation and real-time song requests.",
    technologies: ["Python", "Selenium", "Node.js", "Express.js", "Socket.IO", "HTML", "JavaScript", "CSS", "Bootstrap"],
    displayMedia: {
      type: "image",
      url: "spotifyselenium/spotify1.PNG",
      alt: "Spotify Selenium automation interface"
    },
    media: [
      {
        type: "image",
        url: "spotifyselenium/spotify1.PNG",
        alt: "Main song request interface"
      },
      {
        type: "image",
        url: "spotifyselenium/spotify2.PNG",
        alt: "Song queue management view"
      },
      {
        type: "image",
        url: "spotifyselenium/spotify3.PNG",
        alt: "Automated player status display"
      }
    ],
    githubUrl: "https://github.com/tuckajdooleh/spotifyselenium",
    liveUrl: "https://tuckajdooleh.github.io/eportfolio/projects/spotifyselenium/spotifyselenium.html"
  },
  {
    title: "Ember.Js Support App",
    description: "A full-stack application developed for Dr. James Hill at IUPUI, designed to facilitate interaction between life coaches and former inmates. Built with Ember.js frontend and Blueprint (a custom Node.js framework) with MongoDB backend, the system enables goal setting, distribution reporting, and coach-client relationship management. The project included implementation of provided UI designs and various interactive features for both coaches and clients.",
    shortDescription: "Support system connecting life coaches with former inmates for rehabilitation tracking.",
    technologies: ["Ember.js", "Node.js", "Blueprint", "MongoDB"],
    displayMedia: {
      type: "image",
      url: "ember/profile.PNG",
      alt: "Ember.js support app interface"
    },
    media: [
      {
        type: "image",
        url: "ember/login.PNG",
        alt: "Login interface"
      },
      {
        type: "image",
        url: "ember/clients.PNG",
        alt: "Client management view"
      },
      {
        type: "image",
        url: "ember/distribution.PNG",
        alt: "Distribution tracking interface"
      },
      {
        type: "image",
        url: "ember/showdistribution.PNG",
        alt: "Distribution details view"
      },
      {
        type: "image",
        url: "ember/newcoach.PNG",
        alt: "New coach registration interface"
      },
      {
        type: "image",
        url: "ember/profile.PNG",
        alt: "User profile interface"
      }
    ],
    githubUrl: "https://github.com/tuckajdooleh/ember",
    liveUrl: "https://tuckajdooleh.github.io/eportfolio/projects/ember/ember.html"
  },
  {
    title: "BACI Member Tracking Website",
    description: "A web application developed for the Burmese American Community Institute (BACI) as part of a Serverside Programming class project. The platform was designed to help Burmese refugees connect with mentors who could assist them in integrating into American society. The project involved extensive frontend development and PHP backend implementation, focusing on member management and mentor-mentee matching functionality.",
    shortDescription: "Web platform connecting Burmese refugees with integration mentors in American society.",
    technologies: ["PHP", "SQL", "HTML", "JavaScript", "Bootstrap"],
    displayMedia: {
      type: "image",
      url: "baci/baci.PNG",
      alt: "BACI member tracking dashboard"
    },
    media: [
      {
        type: "image",
        url: "baci/baci.PNG",
        alt: "BACI platform interface"
      }
    ],
    githubUrl: "https://github.com/tuckajdooleh/baci",
    liveUrl: "https://tuckajdooleh.github.io/eportfolio/projects/baci/baci.html"
  },
  {
    title: "Impact Church Member Tracker",
    description: "A comprehensive member tracking system developed for a church leader as part of a Software Engineering class project. The system features iPad-compatible sign-in for worship nights, secure user authentication with password hashing, password recovery system, and an admin dashboard for attendance and contact management. Built following Agile development principles and proper security practices, the project includes member management interfaces with search, edit, and delete functionality using PHP data tables.",
    shortDescription: "Secure church attendance and member management system with iPad-friendly interface.",
    technologies: ["PHP", "SQL", "HTML", "JavaScript", "Bootstrap"],
    displayMedia: {
      type: "image",
      url: "impact/membermanagement.PNG",
      alt: "Impact Church member management interface"
    },
    media: [
      {
        type: "image",
        url: "impact/login.PNG",
        alt: "Secure login interface"
      },
      {
        type: "image",
        url: "impact/forgotpassword.PNG",
        alt: "Password recovery page"
      },
      {
        type: "image",
        url: "impact/membermanagement.PNG",
        alt: "Member management dashboard"
      },
      {
        type: "image",
        url: "impact/checkin.PNG",
        alt: "Attendance check-in interface"
      },
      {
        type: "image",
        url: "impact/signin.PNG",
        alt: "Member sign-in page"
      }
    ],
    githubUrl: "https://github.com/tuckajdooleh/impact",
    liveUrl: "https://tuckajdooleh.github.io/eportfolio/projects/impact/impact.html"
  },
  {
    title: "MIDI Instrument Replacer",
    description: "A Python program that transforms MIDI songs by replacing their instruments with custom sound effects. The application processes MIDI files to extract note timing, intensity, and pitch information across multiple tracks, then creates a chromatic scale from a provided sound effect (assumed to be in middle C). The program can generate meme-style music similar to 'Call Me Maybe but its Gabe the Dog' by applying sound effect substitution to each note in the original MIDI file. Note: The program is optimized for Linux systems due to library dependencies.",
    shortDescription: "Tool for creating meme music by replacing MIDI instruments with custom sound effects.",
    technologies: ["Python"],
    displayMedia: {
      type: "image",
      url: "midi/midi.PNG",
      alt: "MIDI instrument replacer interface"
    },
    media: [
      {
        type: "image",
        url: "midi/midi.PNG",
        alt: "MIDI sound replacement program interface"
      }
    ],
    githubUrl: "https://github.com/tuckajdooleh/midi",
    liveUrl: "https://tuckajdooleh.github.io/eportfolio/projects/midi/midi.html"
  },
  {
    title: "Church Member Tracking Website",
    description: "Comprehensive system for tracking church members and their information. As part of an honors contract project, this involved significant refactoring of an existing codebase, including rewriting half of the pages, fixing database issues, restructuring tables, and adding new features. The project was successfully deployed on Blue hosting after extensive improvements to both frontend and backend components.",
    shortDescription: "Complete church membership management platform.",
    technologies: ["PHP", "HTML", "JavaScript", "CSS", "SQL"],
    displayMedia: {
      type: "image",
      url: "membertracking/mainadmin.PNG",
      alt: "Church member tracking admin dashboard"
    },
    media: [
      {
        type: "image",
        url: "membertracking/login.PNG",
        alt: "Login interface"
      },
      {
        type: "image",
        url: "membertracking/mainadmin.PNG",
        alt: "Main admin dashboard"
      },
      {
        type: "image",
        url: "membertracking/searchmember.PNG",
        alt: "Member search interface"
      },
      {
        type: "image",
        url: "membertracking/searchusers.PNG",
        alt: "User search dashboard"
      }
    ],
    githubUrl: "https://github.com/tuckajdooleh/membertracking",
    liveUrl: "https://tuckajdooleh.github.io/eportfolio/projects/membertracking/membertracking.html"
  },
  {
    title: "IUPUI Class Finder 3D Game",
    description: "A 3D interactive game developed as an honors contract project to help new students navigate IUPUI's campus. Players can select their class buildings in order, then navigate from the Campus Center to each class location in a first-person view. The game features building name displays, schedule tracking, and was built using Blender for 3D modeling (with OSM add-on for campus layout) and Godot for game mechanics. The project includes an easily extensible building system for future additions.",
    shortDescription: "3D campus navigation game for IUPUI students.",
    technologies: ["Godot Engine", "Blender"],
    displayMedia: {
      type: "image",
      url: "iupuitour/classfinder.PNG",
      alt: "IUPUI 3D class finder game screenshot"
    },
    media: [
      {
        type: "image",
        url: "iupuitour/classfinder.PNG",
        alt: "Main game interface"
      },
      {
        type: "image",
        url: "iupuitour/view.png",
        alt: "Campus view 1"
      },
      {
        type: "image",
        url: "iupuitour/view2.png",
        alt: "Campus view 2"
      },
      {
        type: "image",
        url: "iupuitour/view3.png",
        alt: "Campus view 3"
      }
    ],
    githubUrl: "https://github.com/tuckajdooleh/iupuitour",
    liveUrl: "https://tuckajdooleh.github.io/eportfolio/projects/iupuitour/iupuitour.html"
  },
  {
    title: "Quarantine Simulator 3D Game",
    description: "A 3D game developed as a final project for 3D Game Programming, simulating pandemic shopping challenges. Built with Godot and Blender, featuring a 3D model of Indianapolis created using OpenStreetMap data. Players must navigate through a city with infected NPCs and traffic to collect essential items (bananas, bread, toilet paper) from a shopping area. The game includes dynamic NPC spawning, infection mechanics, vehicle collisions with ragdoll physics, and multiple levels including city exploration and shopping challenges.",
    shortDescription: "Interactive 3D quarantine life simulator.",
    technologies: ["Godot Engine", "Blender"],
    displayMedia: {
      type: "image",
      url: "quarantine/Screenshot (7).png",
      alt: "Quarantine simulator game screenshot"
    },
    media: [
      {
        type: "image",
        url: "quarantine/Screenshot (7).png",
        alt: "Main game view"
      },
      {
        type: "image",
        url: "quarantine/Screenshot (8).png",
        alt: "City navigation"
      },
      {
        type: "image",
        url: "quarantine/Screenshot (9).png",
        alt: "Shopping area"
      }
    ],
    githubUrl: "https://github.com/tuckajdooleh/quarantine",
    liveUrl: "https://tuckajdooleh.github.io/eportfolio/projects/quarantine/quarantine.html"
  },
  {
    title: "2D Multiplayer Game",
    description: "A real-time multiplayer 2D game developed as an honors contract project for 2D game programming. Inspired by Minecraft/Minicraft, the game features multiplayer interaction using Socket.IO, inventory management, and player combat mechanics. Players can move around the map, interact with items, and engage in combat with other players, complete with visual effects like confetti on player elimination.",
    shortDescription: "Networked 2D multiplayer game with real-time sync.",
    technologies: ["Node.js", "Express.js", "Socket.IO", "HTML", "JavaScript", "CSS"],
    displayMedia: {
      type: "image",
      url: "2dmultiplayer/players.PNG",
      alt: "2D multiplayer game interface"
    },
    media: [
      {
        type: "image",
        url: "2dmultiplayer/name.PNG",
        alt: "Player name entry screen"
      },
      {
        type: "image",
        url: "2dmultiplayer/players.PNG",
        alt: "Multiplayer gameplay view"
      },
      {
        type: "image",
        url: "2dmultiplayer/death.PNG",
        alt: "Player elimination effect"
      }
    ],
    githubUrl: "https://github.com/tuckajdooleh/2dmultiplayer",
    liveUrl: "https://tuckajdooleh.github.io/eportfolio/projects/2dmultiplayer/2dmultiplayer.html"
  },
  {
    title: "Class Finder (Python)",
    description: "A Python application with GUI developed as a final project for Introduction to Computer Science. The program helps students find optimal paths between classes at IUPUI using a pathfinding library. Features include a Tkinter interface with campus map background, interactive obstacle placement in dev mode, configuration saving/loading, and simple click-based path selection. The project was inspired by the need to calculate precise walking times between classes.",
    shortDescription: "GUI-based class pathfinding application.",
    technologies: ["Python", "Tkinter"],
    displayMedia: {
      type: "image",
      url: "pythonpathfinder/dev.PNG",
      alt: "Python class finder application"
    },
    media: [
      {
        type: "image",
        url: "pythonpathfinder/main.PNG",
        alt: "Main application interface"
      },
      {
        type: "image",
        url: "pythonpathfinder/path.PNG",
        alt: "Path calculation view"
      },
      {
        type: "image",
        url: "pythonpathfinder/dev.PNG",
        alt: "Developer mode interface"
      }
    ],
    githubUrl: "https://github.com/tuckajdooleh/pythonpathfinder",
    liveUrl: "https://tuckajdooleh.github.io/eportfolio/projects/pythonpathfinder/pythonpathfinder.html"
  },
  {
    title: "AP Computer Science Final Project",
    description: "A Java-based game developed as a final project for AP Computer Science. The game features multiple playable characters collecting lunch money while avoiding the assistant principal. Includes a developer mode for easy collision box placement, character dialogue systems, and multiple game scenarios. The project showcases fundamental game development concepts including collision detection, character movement, and basic game mechanics.",
    shortDescription: "Java application for AP Computer Science.",
    technologies: ["Java"],
    displayMedia: {
      type: "image",
      url: "lunchtime/start.PNG",
      alt: "AP CS final project interface"
    },
    media: [
      {
        type: "image",
        url: "lunchtime/lunchtimemenu.PNG",
        alt: "Game menu screen"
      },
      {
        type: "image",
        url: "lunchtime/start.PNG",
        alt: "Game start screen"
      },
      {
        type: "image",
        url: "lunchtime/caught.PNG",
        alt: "Player caught scenario"
      },
      {
        type: "image",
        url: "lunchtime/hallway.PNG",
        alt: "Hallway gameplay view"
      },
      {
        type: "image",
        url: "lunchtime/hallway2.PNG",
        alt: "Alternative hallway view"
      },
      {
        type: "image",
        url: "lunchtime/dev.PNG",
        alt: "Developer mode interface"
      }
    ],
    githubUrl: "https://github.com/tuckajdooleh/lunchtime",
    liveUrl: "https://tuckajdooleh.github.io/eportfolio/projects/lunchtime/lunchtime.html"
  },
  {
    title: "Blocks",
    description: "A Java game featuring block-based puzzles and challenges. Players use mouse controls to avoid randomly spawning blocks with varying colors that fall from the top of the screen. The game includes a scoring system and restart functionality upon game over.",
    shortDescription: "Block-based puzzle game implemented in Java.",
    technologies: ["Java"],
    displayMedia: {
      type: "image",
      url: "blocks/start.PNG",
      alt: "Blocks game start screen"
    },
    media: [
      {
        type: "image",
        url: "blocks/start.PNG",
        alt: "Game start screen"
      },
      {
        type: "image",
        url: "blocks/gameover.PNG",
        alt: "Game over screen with score"
      }
    ],
    githubUrl: "https://github.com/tuckajdooleh/blocks",
    liveUrl: "https://tuckajdooleh.github.io/eportfolio/projects/blocks/blocks.html"
  }
]; 