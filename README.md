# DealTaskAngular

## Methodology

### Generic Components

1. **Modal**: A reusable modal component that can be used for various purposes. Modals are essential for displaying information, forms, or confirmation dialogs to the user.

2. **Input Types**: I've created input components for various types of user input, including:
   - **Search Input**: Two-way binded text-input with styling.
   - **Text Box Input**: Generic textbox input with styling.
   - **Phone Input**: A specialized input for capturing phone numbers and assigning country codes.

### Component Library

Created a `Shared Component Module` to handle all of the shared components between the project.

### User Messaging Service

Responsible for handling most of the logic on the site

- Handles fetching and pagination
- Selecting and unselecting users
- message content and sending

### Component Hierarchy

The application's component structure follows a specific hierarchy:

1. **User Card**: This is the fundamental building block, representing an individual user.
2. **User Card List**: A collection of user cards, displayed in a list format and a select all option.
3. **User Card List Container**: The highest-level container that manages and displays a user list, message textbox, filtering, and pagination.

## Better Approaches

### Logic

I should have sepereated data posting and handling from the service and instead assigned it to the cotainer/page instead.

### Reactive Forms

I could have used reactive forms to better handle data management, resulting in less complex data flows (from service to components).

### UI Library

Using an existing UI library like antd or bootstrap would have made this task much shorter.
