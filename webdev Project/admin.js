// Mock data for demonstration
let drivers = [
  { id: 1, name: "John Doe", license: "DL123456", phone: "123-456-7890", status: "Active" },
  { id: 2, name: "Jane Smith", license: "DL654321", phone: "987-654-3210", status: "Inactive" },
]
let vehicles = [
  { id: 1, type: "Bus", capacity: 50, driver: "John Doe", status: "Active" },
  { id: 2, type: "Van", capacity: 15, driver: "Jane Smith", status: "Inactive" },
]
const timeSlots = [
  { time: "08:00 AM", type: "Pickup", vehicle: "Bus", availableSeats: 50, status: "Available" },
  { time: "05:00 PM", type: "Drop-off", vehicle: "Van", availableSeats: 15, status: "Unavailable" },
]
// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  // Populate tables with mock data
  populateTables()
  // Set up sidebar toggle for mobile
  setupMobileSidebar()
  // Handle window resize
  window.addEventListener("resize", handleResize)
  // Initial resize check
  handleResize()
  // Add this line to set up modal cancel buttons
  setupModalCancelButtons()
})
// Populate tables with mock data
function populateTables() {
  // Add sample data to recent activity
  const recentActivityTable = document.getElementById("recentActivityTable")
  if (recentActivityTable) {
    recentActivityTable.innerHTML = `
            <tr>
                <td>10:30 AM</td>
                <td>New booking created</td>
                <td><span class="badge bg-success">Completed</span></td>
            </tr>
            <tr>
                <td>09:45 AM</td>
                <td>Driver assigned to vehicle</td>
                <td><span class="badge bg-success">Completed</span></td>
            </tr>
            <tr>
                <td>09:15 AM</td>
                <td>Vehicle maintenance scheduled</td>
                <td><span class="badge bg-warning">Pending</span></td>
            </tr>
        `
  }
  // Add sample data to drivers table
  const driversTable = document.getElementById("driversTable")
  if (driversTable) {
    driversTable.innerHTML = drivers
      .map(
        (driver) => `
            <tr>
                <td>${driver.id}</td>
                <td>${driver.name}</td>
                <td>${driver.license}</td>
                <td>${driver.phone}</td>
                <td><span class="badge bg-${driver.status === "Active" ? "success" : "secondary"}">${driver.status}</span></td>
                <td>
                    <button class="btn btn-sm btn-primary me-1"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-sm btn-danger"><i class="fas fa-trash"></i></button>
                </td>
            </tr>
        `,
      )
      .join("")
  }
  // Add sample data to vehicles table
  const vehiclesTable = document.getElementById("vehiclesTable")
  if (vehiclesTable) {
    vehiclesTable.innerHTML = vehicles
      .map(
        (vehicle) => `
            <tr>
                <td>${vehicle.id}</td>
                <td>${vehicle.type}</td>
                <td>${vehicle.capacity}</td>
                <td>${vehicle.driver}</td>
                <td><span class="badge bg-${vehicle.status === "Active" ? "success" : "secondary"}">${vehicle.status}</span></td>
                <td>
                    <button class="btn btn-sm btn-primary me-1"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-sm btn-danger"><i class="fas fa-trash"></i></button>
                </td>
            </tr>
        `,
      )
      .join("")
  }
  // Add sample data to time slots table
  const timeslotsTable = document.getElementById("timeslotsTable")
  if (timeslotsTable) {
    timeslotsTable.innerHTML = timeSlots
      .map(
        (slot) => `
            <tr>
                <td>${slot.time}</td>
                <td>${slot.type}</td>
                <td>${slot.vehicle}</td>
                <td>${slot.availableSeats}</td>
                <td><span class="badge bg-${slot.status === "Available" ? "success" : "danger"}">${slot.status}</span></td>
                <td>
                    <button class="btn btn-sm btn-primary me-1"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-sm btn-danger"><i class="fas fa-trash"></i></button>
                </td>
            </tr>
        `,
      )
      .join("")
  }
  // Add sample data to bookings table
  const bookingsTable = document.getElementById("bookingsTable")
  if (bookingsTable) {
    bookingsTable.innerHTML = `
            <tr>
                <td>B001</td>
                <td>Michael Johnson</td>
                <td>08:00 AM (Pickup)</td>
                <td>Bus</td>
                <td><span class="badge bg-success">Confirmed</span></td>
                <td>
                    <button class="btn btn-sm btn-primary me-1"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-sm btn-danger"><i class="fas fa-trash"></i></button>
                </td>
            </tr>
            <tr>
                <td>B002</td>
                <td>Sarah Williams</td>
                <td>05:00 PM (Drop-off)</td>
                <td>Van</td>
                <td><span class="badge bg-warning">Pending</span></td>
                <td>
                    <button class="btn btn-sm btn-primary me-1"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-sm btn-danger"><i class="fas fa-trash"></i></button>
                </td>
            </tr>
        `
  }
  // Add this line at the end
  updateDriverDropdown()
  updateVehicleDropdown()
}
// Set up mobile sidebar
function setupMobileSidebar() {
  const sidebarToggle = document.getElementById("sidebarToggle")
  const sidebar = document.getElementById("sidebar")
  const mainContent = document.getElementById("mainContent")
  const sidebarOverlay = document.getElementById("sidebarOverlay")
  // Toggle sidebar on button click
  sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("show")
    sidebarOverlay.classList.toggle("show")
    mainContent.classList.toggle("sidebar-open")
  })
  // Close sidebar when clicking on overlay
  sidebarOverlay.addEventListener("click", () => {
    sidebar.classList.remove("show")
    sidebarOverlay.classList.remove("show")
    mainContent.classList.remove("sidebar-open")
  })
  // Close sidebar when clicking on a menu item (on mobile)
  const sidebarLinks = sidebar.querySelectorAll("a")
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 992) {
        sidebar.classList.remove("show")
        sidebarOverlay.classList.remove("show")
        mainContent.classList.remove("sidebar-open")
      }
    })
  })
}
// Handle window resize
function handleResize() {
  const sidebar = document.getElementById("sidebar")
  const mainContent = document.getElementById("mainContent")
  const sidebarOverlay = document.getElementById("sidebarOverlay")
  if (window.innerWidth >= 992) {
    // Desktop view
    sidebar.classList.remove("show")
    sidebarOverlay.classList.remove("show")
    mainContent.classList.remove("sidebar-open")
  }
}
// Show different sections
function showSection(sectionId) {
  const sections = ["dashboard", "drivers", "vehicles", "timeslots", "bookings"]
  // Update active link in sidebar
  const sidebarLinks = document.querySelectorAll(".sidebar a")
  sidebarLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("onclick").includes(sectionId)) {
      link.classList.add("active")
    }
  })
  // Show selected section, hide others
  sections.forEach((section) => {
    const sectionElement = document.getElementById(section + "Section")
    if (sectionElement) {
      sectionElement.style.display = section === sectionId ? "block" : "none"
    }
  })
  // Initialize map when bookings section is shown
  if (sectionId === "bookings") {
    // Use setTimeout to ensure the element is visible before initializing the map
    setTimeout(() => {
      initMap()
    }, 100)
  }
}
function showAddDriverModal() {
  // Reset form
  document.getElementById("addDriverForm").reset()
  // Show modal
  const modal = new bootstrap.Modal(document.getElementById("addDriverModal"))
  modal.show()
}
function showAddVehicleModal() {
  // Reset form
  document.getElementById("addVehicleForm").reset()
  // Update driver dropdown
  updateDriverDropdown()
  // Show modal
  const modal = new bootstrap.Modal(document.getElementById("addVehicleModal"))
  modal.show()
}
function showAddTimeSlotModal() {
  // Reset form
  document.getElementById("addTimeSlotForm").reset()
  // Update vehicle dropdown
  updateVehicleDropdown()
  // Show modal
  const modal = new bootstrap.Modal(document.getElementById("addTimeSlotModal"))
  modal.show()
}
function addDriver() {
  // Get form values
  const driverName = document.getElementById("driverName").value
  const licenseNumber = document.getElementById("licenseNumber").value
  const phoneNumber = document.getElementById("phoneNumber").value
  if (!driverName || !licenseNumber || !phoneNumber) {
    alert("Please fill in all fields")
    return
  }
  // Create new driver object
  const newDriver = {
    id: drivers.length > 0 ? Math.max(...drivers.map((d) => d.id)) + 1 : 1,
    name: driverName,
    license: licenseNumber,
    phone: phoneNumber,
    status: "Active",
  }
  // Add to drivers array
  drivers.push(newDriver)
  // Update drivers table
  updateDriversTable()
  // Update driver dropdown in vehicle modal
  updateDriverDropdown()
  // Reset form
  document.getElementById("addDriverForm").reset()
  // Show success message
  alert("Driver added successfully!")
  // Close modal - fixed approach
  const modalElement = document.getElementById("addDriverModal")
  const modalInstance = bootstrap.Modal.getInstance(modalElement)
  if (modalInstance) {
    modalInstance.hide()
  } else {
    // Fallback if getInstance doesn't work
    const modal = new bootstrap.Modal(modalElement)
    modal.hide()
  }
  // Add to recent activity
  addRecentActivity("New driver added", "Completed")
}
function updateDriversTable() {
  const driversTable = document.getElementById("driversTable")
  if (driversTable) {
    driversTable.innerHTML = drivers
      .map(
        (driver) => `
            <tr>
                <td>${driver.id}</td>
                <td>${driver.name}</td>
                <td>${driver.license}</td>
                <td>${driver.phone}</td>
                <td><span class="badge bg-${driver.status === "Active" ? "success" : "secondary"}">${driver.status}</span></td>
                <td>
                    <button class="btn btn-sm btn-primary me-1" onclick="editDriver(${driver.id})"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-sm btn-danger" onclick="deleteDriver(${driver.id})"><i class="fas fa-trash"></i></button>
                </td>
            </tr>
        `,
      )
      .join("")
  }
  // Update dashboard stats
  document.getElementById("totalDrivers").textContent = drivers.length
}
function updateDriverDropdown() {
  const assignDriver = document.getElementById("assignDriver")
  if (assignDriver) {
    // Keep the first option (Select Driver)
    const firstOption = assignDriver.options[0]
    assignDriver.innerHTML = ""
    assignDriver.appendChild(firstOption)
    // Add all active drivers
    drivers
      .filter((driver) => driver.status === "Active")
      .forEach((driver) => {
        const option = document.createElement("option")
        option.value = driver.id
        option.textContent = driver.name
        assignDriver.appendChild(option)
      })
  }
}
function updateVehiclesTable() {
  const vehiclesTable = document.getElementById("vehiclesTable")
  if (vehiclesTable) {
    vehiclesTable.innerHTML = vehicles
      .map(
        (vehicle) => `
            <tr>
                <td>${vehicle.id}</td>
                <td>${vehicle.type}</td>
                <td>${vehicle.capacity}</td>
                <td>${vehicle.driver}</td>
                <td><span class="badge bg-${vehicle.status === "Active" ? "success" : "secondary"}">${vehicle.status}</span></td>
                <td>
                    <button class="btn btn-sm btn-primary me-1" onclick="editVehicle(${vehicle.id})"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-sm btn-danger" onclick="deleteVehicle(${vehicle.id})"><i class="fas fa-trash"></i></button>
                </td>
            </tr>
        `,
      )
      .join("")
  }
  // Update dashboard stats
  document.getElementById("activeVehicles").textContent = vehicles.filter((v) => v.status === "Active").length
}
function updateVehicleDropdown() {
  const assignVehicle = document.getElementById("assignVehicle")
  if (assignVehicle) {
    // Keep the first option (Select Vehicle)
    const firstOption = assignVehicle.options[0]
    assignVehicle.innerHTML = ""
    assignVehicle.appendChild(firstOption)
    // Add all active vehicles
    vehicles
      .filter((vehicle) => vehicle.status === "Active")
      .forEach((vehicle) => {
        const option = document.createElement("option")
        option.value = vehicle.id
        option.textContent = `${vehicle.type} (${vehicle.capacity} seats)`
        assignVehicle.appendChild(option)
      })
  }
}
function editVehicle(vehicleId) {
  alert("Edit vehicle functionality would go here")
  // This would open a modal with the vehicle's details for editing
}
function deleteVehicle(vehicleId) {
  if (confirm("Are you sure you want to delete this vehicle?")) {
    // Remove vehicle from array
    vehicles = vehicles.filter((vehicle) => vehicle.id !== vehicleId)
    // Update UI
    updateVehiclesTable()
    updateVehicleDropdown()
    // Add to recent activity
    addRecentActivity("Vehicle deleted", "Completed")
    alert("Vehicle deleted successfully")
  }
}
function editDriver(driverId) {
  alert("Edit driver functionality would go here")
  // This would open a modal with the driver's details for editing
}
function deleteDriver(driverId) {
  if (confirm("Are you sure you want to delete this driver?")) {
    // Remove driver from array
    drivers = drivers.filter((driver) => driver.id !== driverId)
    // Update UI
    updateDriversTable()
    updateDriverDropdown()
    alert("Driver deleted successfully")
  }
}
function addVehicle() {
  // Get form values
  const vehicleType = document.getElementById("vehicleType").value
  const vehicleCapacity = document.getElementById("vehicleCapacity").value
  const driverId = document.getElementById("assignDriver").value
  if (!vehicleType || !vehicleCapacity || !driverId) {
    alert("Please fill in all fields")
    return
  }
  // Find the selected driver
  const selectedDriver = drivers.find((driver) => driver.id == driverId)
  // Create new vehicle object
  const newVehicle = {
    id: vehicles.length > 0 ? Math.max(...vehicles.map((v) => v.id)) + 1 : 1,
    type: vehicleType.charAt(0).toUpperCase() + vehicleType.slice(1), // Capitalize first letter
    capacity: Number.parseInt(vehicleCapacity),
    driver: selectedDriver.name,
    status: "Active",
  }
  // Add to vehicles array
  vehicles.push(newVehicle)
  // Update vehicles table
  updateVehiclesTable()
  // Update vehicle dropdown in time slot modal
  updateVehicleDropdown()
  // Reset form
  document.getElementById("addVehicleForm").reset()
  // Show success message
  alert("Vehicle added successfully!")
  // Close modal - fixed approach
  const modalElement = document.getElementById("addVehicleModal")
  const modalInstance = bootstrap.Modal.getInstance(modalElement)
  if (modalInstance) {
    modalInstance.hide()
  } else {
    // Fallback if getInstance doesn't work
    const modal = new bootstrap.Modal(modalElement)
    modal.hide()
  }
  // Add to recent activity
  addRecentActivity(`New ${vehicleType} added`, "Completed")
}
function updateTimeSlotsTable() {
  const timeslotsTable = document.getElementById("timeslotsTable")
  if (timeslotsTable) {
    timeslotsTable.innerHTML = timeSlots
      .map(
        (slot, index) => `
            <tr>
                <td>${slot.time}</td>
                <td>${slot.type}</td>
                <td>${slot.vehicle}</td>
                <td>${slot.availableSeats}</td>
                <td><span class="badge bg-${slot.status === "Available" ? "success" : "danger"}">${slot.status}</span></td>
                <td>
                    <button class="btn btn-sm btn-primary me-1" onclick="editTimeSlot(${index})"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-sm btn-danger" onclick="deleteTimeSlot(${index})"><i class="fas fa-trash"></i></button>
                </td>
            </tr>
        `,
      )
      .join("")
  }
}
function editTimeSlot(index) {
  alert("Edit time slot functionality would go here")
  // This would open a modal with the time slot's details for editing
}
function deleteTimeSlot(index) {
  if (confirm("Are you sure you want to delete this time slot?")) {
    // Remove time slot from array
    timeSlots.splice(index, 1)
    // Update UI
    updateTimeSlotsTable()
    // Add to recent activity
    addRecentActivity("Time slot deleted", "Completed")
    alert("Time slot deleted successfully")
  }
}
function formatTimeDisplay(time24h) {
  // Convert 24h time format (HH:MM) to 12h format (HH:MM AM/PM)
  if (!time24h) return ""
  const [hours, minutes] = time24h.split(":")
  const hour = Number.parseInt(hours)
  const ampm = hour >= 12 ? "PM" : "AM"
  const hour12 = hour % 12 || 12 // Convert 0 to 12 for 12 AM
  return `${hour12}:${minutes} ${ampm}`
}
function addRecentActivity(activity, status) {
  const recentActivityTable = document.getElementById("recentActivityTable")
  if (recentActivityTable) {
    // Get current time
    const now = new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const ampm = hours >= 12 ? "PM" : "AM"
    const hour12 = hours % 12 || 12
    const timeString = `${hour12}:${minutes < 10 ? "0" + minutes : minutes} ${ampm}`
    // Create new row
    const newRow = document.createElement("tr")
    newRow.innerHTML = `
            <td>${timeString}</td>
            <td>${activity}</td>
            <td><span class="badge bg-${status === "Completed" ? "success" : "warning"}">${status}</span></td>
        `
    // Add to top of table
    recentActivityTable.insertBefore(newRow, recentActivityTable.firstChild)
    // Limit to 5 most recent activities
    if (recentActivityTable.children.length > 5) {
      recentActivityTable.removeChild(recentActivityTable.lastChild)
    }
  }
}
function addTimeSlot() {
  // Get form values
  const slotTime = document.getElementById("slotTime").value
  const slotType = document.getElementById("slotType").value
  const vehicleId = document.getElementById("assignVehicle").value
  if (!slotTime || !slotType || !vehicleId) {
    alert("Please fill in all fields")
    return
  }
  // Find the selected vehicle
  const selectedVehicle = vehicles.find((vehicle) => vehicle.id == vehicleId)
  // Format time for display (convert 24h to 12h format)
  const timeDisplay = formatTimeDisplay(slotTime)
  // Create new time slot object
  const newTimeSlot = {
    time: timeDisplay,
    type: slotType === "pickup" ? "Pickup" : "Drop-off",
    vehicle: selectedVehicle.type,
    availableSeats: selectedVehicle.capacity,
    status: "Available",
  }
  // Add to timeSlots array
  timeSlots.push(newTimeSlot)
  // Update time slots table
  updateTimeSlotsTable()
  // Reset form
  document.getElementById("addTimeSlotForm").reset()
  // Show success message
  alert("Time slot added successfully!")
  // Close modal - fixed approach
  const modalElement = document.getElementById("addTimeSlotModal")
  const modalInstance = bootstrap.Modal.getInstance(modalElement)
  if (modalInstance) {
    modalInstance.hide()
  } else {
    // Fallback if getInstance doesn't work
    const modal = new bootstrap.Modal(modalElement)
    modal.hide()
  }
  // Add to recent activity
  addRecentActivity(`New ${slotType} time slot added`, "Completed")
}
function logout() {
  // Logout logic here
  alert("Logging out...")
  // Redirect to login page
  window.location.href = "adminlog.html"
}
// Map related variables
let bookingMap
let vehicleMarkers = []
// Initialize map when the bookings section is shown
function initMap() {
  if (bookingMap) {
    // Map already initialized, just update markers
    updateVehicleMarkers()
    return
  }
  // Create map centered on a default location (can be adjusted based on your needs)
  bookingMap = L.map("bookingMap").setView([40.7128, -74.006], 12)
  // Add OpenStreetMap tile layer
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(bookingMap)
  // Add vehicle markers
  updateVehicleMarkers()
  // Refresh markers every 30 seconds to simulate live tracking
  setInterval(updateVehicleMarkers, 30000)
}
// Update vehicle markers on the map
function updateVehicleMarkers() {
  // Clear existing markers
  vehicleMarkers.forEach((marker) => bookingMap.removeLayer(marker))
  vehicleMarkers = []
  // Mock vehicle location data (in a real app, this would come from a database or API)
  const vehicleLocations = [
    {
      id: 1,
      type: "Bus",
      driver: "John Doe",
      lat: 40.7128,
      lng: -74.006,
      status: "In Transit",
      passengers: 32,
      nextStop: "Central Station",
    },
    {
      id: 2,
      type: "Van",
      driver: "Jane Smith",
      lat: 40.7282,
      lng: -73.9942,
      status: "Pickup",
      passengers: 8,
      nextStop: "East Office",
    },
    {
      id: 3,
      type: "Car",
      driver: "Mike Johnson",
      lat: 40.702,
      lng: -74.016,
      status: "Dropoff",
      passengers: 3,
      nextStop: "South Terminal",
    },
  ]
  // Add markers for each vehicle
  vehicleLocations.forEach((vehicle) => {
    // Create custom icon based on vehicle type
    const iconUrl = getVehicleIcon(vehicle.type)
    const vehicleIcon = L.icon({
      iconUrl: iconUrl,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    })
    // Create marker with popup
    const marker = L.marker([vehicle.lat, vehicle.lng], { icon: vehicleIcon })
      .addTo(bookingMap)
      .bindPopup(`
                <div class="vehicle-info">
                    <h5>${vehicle.type} #${vehicle.id}</h5>
                    <p><strong>Driver:</strong> ${vehicle.driver}</p>
                    <p><strong>Status:</strong> ${vehicle.status}</p>
                    <p><strong>Passengers:</strong> ${vehicle.passengers}</p>
                    <p><strong>Next Stop:</strong> ${vehicle.nextStop}</p>
                </div>
            `)
    vehicleMarkers.push(marker)
    // Randomly move markers slightly to simulate movement (only in demo)
    setTimeout(() => {
      simulateVehicleMovement(marker, vehicle)
    }, 5000)
  })
}
// Get icon URL based on vehicle type
function getVehicleIcon(type) {
  switch (type.toLowerCase()) {
    case "bus":
      return "https://cdn-icons-png.flaticon.com/128/3097/3097144.png"
    case "van":
      return "https://cdn-icons-png.flaticon.com/128/3097/3097122.png"
    case "car":
      return "https://cdn-icons-png.flaticon.com/128/3097/3097073.png"
    default:
      return "https://cdn-icons-png.flaticon.com/128/3097/3097073.png"
  }
}
// Simulate vehicle movement for demo purposes
function simulateVehicleMovement(marker, vehicle) {
  // Small random movement to simulate driving
  const latChange = (Math.random() - 0.5) * 0.005
  const lngChange = (Math.random() - 0.5) * 0.005
  const newLat = vehicle.lat + latChange
  const newLng = vehicle.lng + lngChange

  marker.setLatLng([newLat, newLng])
}
// Add this function at the end of the file to set up modal cancel buttons
function setupModalCancelButtons() {
  // Set up cancel buttons for all modals
  const modalCancelButtons = document.querySelectorAll('.modal .btn-secondary[data-bs-dismiss="modal"]')
  modalCancelButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const modalElement = this.closest(".modal")
      const modalInstance = bootstrap.Modal.getInstance(modalElement)
      if (modalInstance) {
        modalInstance.hide()
      }
    })
  })
  // Set up close buttons (X) for all modals
  const modalCloseButtons = document.querySelectorAll(".modal .btn-close")
  modalCloseButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const modalElement = this.closest(".modal")
      const modalInstance = bootstrap.Modal.getInstance(modalElement)
      if (modalInstance) {
        modalInstance.hide()
      }
    })
  })
}