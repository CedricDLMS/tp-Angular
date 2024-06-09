# TpAngular - NOT FINISHED

This project was generated with Angular CLI version 17.3.8.

## Project Overview

The TpAngular project is an Angular application designed to manage cards and columns, which are categorized by terms. It uses Angular services to handle data fetching and event management.

### Main Features

- **Card Management**: Handles displaying and filtering of cards based on columns and terms.
- **Column Management**: Manages the display and organization of columns.
- **Term Management**: Manages terms and the events associated with them for filtering cards.

## Installation Instructions

### Prerequisites

- Node.js and npm installed
- Angular CLI installed globally (`npm install -g @angular/cli`)

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/CedricDLMS/tp-Angular.git
    cd tp-Angular
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the development server:
    ```bash
    ng serve
    ```
    Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### JSON Server Setup

The project uses json-server for a mock backend.

1. Install json-server globally:
    ```bash
    npm install -g json-server
    ```

2. Run the JSON server:
    ```bash
    json-server --watch db.json
    ```

