# Esquare Transport Service

## 📋 Project Documentation

---

## 1. Introduction

### 1.1 Project Overview
**Esquare Transport Service** is a comprehensive web-based transport management system designed to streamline employee shuttle bus booking and fleet management operations. The system provides an efficient platform for employees to book transportation services and for administrators to manage drivers, vehicles, schedules, and bookings.

### 1.2 Purpose
The primary purpose of this system is to:
- Simplify the process of booking company transport for employees
- Provide administrators with tools to efficiently manage the transport fleet
- Enable real-time tracking of bus locations
- Reduce manual coordination and paperwork in transport management

### 1.3 Scope
The system covers:
- User registration and authentication
- Time slot booking for transport services
- Administrative dashboard for fleet management
- Driver and vehicle management
- Booking management and tracking
- Real-time location mapping

### 1.4 Target Users
| User Type | Description |
|-----------|-------------|
| **Employees** | Company staff who need to book transport services |
| **Administrators** | Transport managers who oversee fleet operations |

---

## 2. User Requirements

### 2.1 Employee Requirements

| ID | Requirement | Priority |
|----|-------------|----------|
| UR-01 | Users shall be able to register for an account with valid credentials | High |
| UR-02 | Users shall be able to log in securely to access the system | High |
| UR-03 | Users shall be able to view available time slots for transport | High |
| UR-04 | Users shall be able to book a time slot for bus pickup | High |
| UR-05 | Users shall be able to view their current booking status | Medium |
| UR-06 | Users shall be able to view the bus location on a map | Medium |
| UR-07 | Users shall be able to log out of the system | High |
| UR-08 | Users shall receive confirmation after successful booking | Medium |

### 2.2 Administrator Requirements

| ID | Requirement | Priority |
|----|-------------|----------|
| UR-09 | Admins shall be able to log in to a dedicated admin portal | High |
| UR-10 | Admins shall be able to view dashboard statistics | High |
| UR-11 | Admins shall be able to add, edit, and remove drivers | High |
| UR-12 | Admins shall be able to add, edit, and remove vehicles | High |
| UR-13 | Admins shall be able to manage time slots | High |
| UR-14 | Admins shall be able to view and manage all bookings | High |
| UR-15 | Admins shall be able to assign drivers to vehicles | Medium |
| UR-16 | Admins shall be able to view recent system activity | Low |
| UR-17 | Admins shall be able to log out of the system | High |

---

## 3. Functional Requirements

### 3.1 Authentication Module

| ID | Requirement | Description |
|----|-------------|-------------|
| FR-01 | User Registration | The system shall allow new users to register by providing username, email, and password |
| FR-02 | User Login | The system shall authenticate users with valid credentials |
| FR-03 | Admin Login | The system shall provide separate authentication for administrators |
| FR-04 | Session Management | The system shall maintain user sessions using browser storage |
| FR-05 | Logout Functionality | The system shall allow users to securely log out and clear session data |

### 3.2 Booking Module

| ID | Requirement | Description |
|----|-------------|-------------|
| FR-06 | View Time Slots | The system shall display available time slots (Morning, Afternoon, Evening, Night shifts) |
| FR-07 | Book Time Slot | The system shall allow users to select and book a time slot |
| FR-08 | Booking Confirmation | The system shall display confirmation message after successful booking |
| FR-09 | View Booking Status | The system shall display the user's current booking information |
| FR-10 | Cancel Booking | The system shall allow users to cancel their existing bookings |

### 3.3 Map & Tracking Module

| ID | Requirement | Description |
|----|-------------|-------------|
| FR-11 | Display Map | The system shall display an interactive map using Leaflet.js |
| FR-12 | Show Bus Location | The system shall display bus location markers on the map |
| FR-13 | Map Navigation | The system shall allow users to zoom and pan the map |

### 3.4 Admin Dashboard Module

| ID | Requirement | Description |
|----|-------------|-------------|
| FR-14 | Dashboard Statistics | The system shall display total drivers, active vehicles, today's bookings, and pending requests |
| FR-15 | Recent Activity Log | The system shall display recent system activities with timestamps |

### 3.5 Driver Management Module

| ID | Requirement | Description |
|----|-------------|-------------|
| FR-16 | Add Driver | The system shall allow admins to add new drivers with ID, name, license, phone, and status |
| FR-17 | Edit Driver | The system shall allow admins to modify existing driver information |
| FR-18 | Delete Driver | The system shall allow admins to remove drivers from the system |
| FR-19 | View Drivers | The system shall display a list of all drivers in a table format |

### 3.6 Vehicle Management Module

| ID | Requirement | Description |
|----|-------------|-------------|
| FR-20 | Add Vehicle | The system shall allow admins to add new vehicles with ID, type, capacity, and status |
| FR-21 | Edit Vehicle | The system shall allow admins to modify existing vehicle information |
| FR-22 | Delete Vehicle | The system shall allow admins to remove vehicles from the system |
| FR-23 | View Vehicles | The system shall display a list of all vehicles in a table format |
| FR-24 | Assign Driver | The system shall allow admins to assign drivers to vehicles |

### 3.7 Time Slot Management Module

| ID | Requirement | Description |
|----|-------------|-------------|
| FR-25 | Add Time Slot | The system shall allow admins to create new time slots |
| FR-26 | Edit Time Slot | The system shall allow admins to modify existing time slots |
| FR-27 | Delete Time Slot | The system shall allow admins to remove time slots |
| FR-28 | View Time Slots | The system shall display all available time slots |

### 3.8 Booking Management Module

| ID | Requirement | Description |
|----|-------------|-------------|
| FR-29 | View All Bookings | The system shall display all user bookings to administrators |
| FR-30 | Filter Bookings | The system shall allow admins to filter bookings by date, status, or user |
| FR-31 | Update Booking Status | The system shall allow admins to update booking statuses |

---

## 4. Non-Functional Requirements

### 4.1 Performance Requirements

| ID | Requirement | Description |
|----|-------------|-------------|
| NFR-01 | Page Load Time | All pages shall load within 3 seconds under normal network conditions |
| NFR-02 | Response Time | User interactions shall receive feedback within 1 second |
| NFR-03 | Map Loading | The map component shall load within 5 seconds |
| NFR-04 | Concurrent Users | The system shall support at least 100 concurrent users |

### 4.2 Security Requirements

| ID | Requirement | Description |
|----|-------------|-------------|
| NFR-05 | Password Protection | User passwords shall be stored securely (not in plain text) |
| NFR-06 | Session Security | User sessions shall expire after a period of inactivity |
| NFR-07 | Access Control | Admin features shall only be accessible to authenticated administrators |
| NFR-08 | Input Validation | All user inputs shall be validated to prevent injection attacks |

### 4.3 Usability Requirements

| ID | Requirement | Description |
|----|-------------|-------------|
| NFR-09 | Responsive Design | The system shall be accessible on desktop, tablet, and mobile devices |
| NFR-10 | Browser Compatibility | The system shall work on Chrome, Firefox, Safari, and Edge browsers |
| NFR-11 | Intuitive Interface | Users shall be able to complete booking within 3 clicks |
| NFR-12 | Error Messages | The system shall display clear, user-friendly error messages |
| NFR-13 | Navigation | The system shall provide clear navigation between sections |

### 4.4 Reliability Requirements

| ID | Requirement | Description |
|----|-------------|-------------|
| NFR-14 | Availability | The system shall be available 99% of the time |
| NFR-15 | Data Persistence | Booking data shall be preserved during browser sessions |
| NFR-16 | Error Handling | The system shall handle errors gracefully without crashing |

### 4.5 Maintainability Requirements

| ID | Requirement | Description |
|----|-------------|-------------|
| NFR-17 | Code Organization | Code shall be organized in a modular and readable manner |
| NFR-18 | Documentation | Code shall include comments for complex logic |
| NFR-19 | Scalability | The system architecture shall allow for future enhancements |

### 4.6 Compatibility Requirements

| ID | Requirement | Description |
|----|-------------|-------------|
| NFR-20 | Framework Compatibility | The system shall use Bootstrap 5 for UI components |
| NFR-21 | Map Integration | The system shall integrate with OpenStreetMap via Leaflet.js |
| NFR-22 | Standards Compliance | The system shall follow HTML5 and CSS3 standards |

---

## 5. System Architecture

### 5.1 Technology Stack

| Component | Technology |
|-----------|------------|
| **Frontend** | HTML5, CSS3, JavaScript |
| **UI Framework** | Bootstrap 5.3 |
| **Icons** | Font Awesome 6.4 |
| **Maps** | Leaflet.js with OpenStreetMap |
| **Storage** | Browser Session Storage |
| **Hosting** | Vercel (Static Site Hosting) |

### 5.2 File Structure

```
webdev Project/
├── get started.html    # Landing/Welcome page
├── login.html          # User login page
├── register.html       # User registration page
├── employee.html       # Employee dashboard with booking
├── admin.html          # Admin dashboard
├── adminlog.html       # Admin login page
├── admin.js            # Admin functionality scripts
├── admincss.css        # Admin panel styles
├── img.jpg             # Background image
├── bus3.jpg            # Bus image
├── adminoff.jpg        # Admin image
└── Electric-Bus.jpg.webp  # Electric bus image
```

### 5.3 Page Flow

```
┌─────────────────┐
│  Get Started    │
│    (Landing)    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐     ┌─────────────────┐
│     Login       │────▶│    Register     │
└────────┬────────┘     └─────────────────┘
         │
    ┌────┴────┐
    │         │
    ▼         ▼
┌────────┐  ┌────────────┐
│Employee│  │ Admin      │
│Dashboard│ │ Login      │
└────────┘  └─────┬──────┘
                  │
                  ▼
            ┌──────────┐
            │  Admin   │
            │Dashboard │
            └──────────┘
```

---

## 6. Time Slots

| Shift | Time Range | Description |
|-------|------------|-------------|
| Morning Shift | 8:00 AM - 12:00 PM | Early morning transport |
| Afternoon Shift | 12:00 PM - 4:00 PM | Midday transport |
| Evening Shift | 4:00 PM - 8:00 PM | Late afternoon transport |
| Night Shift | 8:00 PM - 12:00 AM | Night transport |

---

## 7. Future Enhancements

- [ ] Backend integration with Node.js/Express or similar
- [ ] Database integration (MySQL/MongoDB)
- [ ] Real-time GPS tracking for buses
- [ ] Push notifications for booking updates
- [ ] Payment integration for premium services
- [ ] Mobile application (iOS/Android)
- [ ] Email notifications for booking confirmations
- [ ] Route planning and optimization
- [ ] Driver rating and feedback system
- [ ] Analytics and reporting dashboard

---

## 8. Glossary

| Term | Definition |
|------|------------|
| **Time Slot** | A predefined period during which transport services are available |
| **Booking** | A reservation made by an employee for a specific time slot |
| **Fleet** | The collection of vehicles managed by the system |
| **Driver** | A person assigned to operate a vehicle |
| **Dashboard** | A visual interface displaying key metrics and statistics |

---

## 9. Version History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | February 2026 | Development Team | Initial release |

---

## 10. Contact

For questions or support regarding this system, please contact the development team.

---

*Document Last Updated: February 3, 2026*
