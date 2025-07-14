# Garden Merge Game

## Overview

This is a mobile-ready 3D plant-merging puzzle game built with React Three Fiber and Express, configured for Android Play Store deployment. Players merge colorful plant gems to restore magical gardens in this casual puzzle adventure.

## Recent Changes (January 2025)

✓ Simplified game to single-level focus for Play Store deployment
✓ Resolved UI overlap issues between tutorial hints and interactive buttons
✓ Transformed plant graphics into colorful sparkling gem designs
✓ Configured Capacitor for Android mobile app conversion
✓ Created minimal mobile-optimized HTML version for faster deployment
✓ Added Play Store deployment documentation and Android project structure
✓ Generated app icon and configured mobile app metadata

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Fullstack Monorepo Structure
- **Client**: React-based frontend with Three.js integration
- **Server**: Express backend with basic routing structure
- **Shared**: Common schemas and types shared between client and server
- **Database**: PostgreSQL with Drizzle ORM (configured but not fully implemented)

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **3D Graphics**: Three.js via React Three Fiber
- **UI Components**: Radix UI components with Tailwind CSS
- **State Management**: Zustand for game state, plant collections, and audio
- **Build Tool**: Vite with hot module replacement

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Storage**: In-memory storage implementation as fallback
- **API**: RESTful endpoints (structure ready, routes not implemented)

## Key Components

### Game Logic
- **Plant System**: Multiple plant types (seed, sprout, flower, tree, ancient) with elemental properties
- **Merge System**: Complex merging rules based on plant types and elements
- **Puzzle System**: Level-based puzzles with specific placement requirements
- **Level Progression**: Structured level system with objectives and rewards

### 3D Game World
- **GameBoard**: Main 3D scene with garden environment
- **MergeGrid**: 4x4 grid for plant merging mechanics
- **PuzzleArea**: 3x3 grid for puzzle solving
- **PlantTile**: Individual plant components with animations
- **ParticleSystem**: Ambient particles for atmosphere

### State Management
- **useGameStore**: Game phase, levels, score, and lives
- **usePlantStore**: Plant collections and grid management
- **useAudio**: Sound effects and background music control

### User Interface
- **GameUI**: HUD with score, lives, and objectives
- **Tutorial**: Onboarding system for new players
- **Responsive Design**: Mobile-friendly with touch controls

## Data Flow

1. **Game Initialization**: Load level data and initialize plant collections
2. **Player Actions**: Drag and drop plants between grid positions
3. **Merge Logic**: Process plant combinations and create new plants
4. **Puzzle Validation**: Check if puzzle requirements are met
5. **Level Progression**: Unlock new content and advance to next level
6. **State Persistence**: Local storage for game progress

## External Dependencies

### Frontend Dependencies
- **@react-three/fiber**: 3D rendering engine
- **@react-three/drei**: Three.js helpers and utilities
- **@radix-ui/react-***: Accessible UI components
- **@tanstack/react-query**: Server state management
- **zustand**: Client state management
- **tailwindcss**: Styling framework
- **class-variance-authority**: Component variants

### Backend Dependencies
- **drizzle-orm**: Type-safe database ORM
- **@neondatabase/serverless**: PostgreSQL database driver
- **express**: Web framework
- **tsx**: TypeScript execution

### Development Tools
- **vite**: Build tool and dev server
- **typescript**: Type checking
- **tailwindcss**: CSS framework
- **postcss**: CSS processing

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds React app to `dist/public`
2. **Backend**: esbuild bundles server code to `dist/index.js`
3. **Assets**: Static files served from build directory

### Environment Configuration
- **Development**: Vite dev server with HMR
- **Production**: Express serves static files and API routes
- **Database**: PostgreSQL connection via environment variables

### Scripts
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run db:push`: Push database schema changes

### Hosting Requirements
- Node.js runtime
- PostgreSQL database
- Static file serving capability
- WebGL support for 3D graphics

## Technical Considerations

### Performance
- Three.js optimizations for mobile devices
- Efficient state management with Zustand
- Lazy loading of 3D assets

### Accessibility
- Radix UI components for keyboard navigation
- Screen reader support
- Mobile touch controls

### Browser Compatibility
- Modern browsers with WebGL support
- Progressive enhancement for older browsers
- Responsive design for various screen sizes