/* ========================================
   ======= ACTIONS - RUN JAVASCRIPT =======
   ======= Code Used in PDF Document ====== 
   ======================================== */


// ------ JS For Adding Received Materials ------

// Add received material for Material 1
var received = parseFloat(this.getField("receivedMaterial1").value) || 0;
var totalField = this.getField("totalMaterial1");
if (received !== 0) {
    totalField.value = (parseFloat(totalField.value) || 0) + received;
    this.getField("receivedMaterial1").value = "";
}

/* ======================================== */

// Add received material for Material 2
var received = parseFloat(this.getField("receivedMaterial2").value) || 0;
var totalField = this.getField("totalMaterial2");
if (received !== 0) {
    totalField.value = (parseFloat(totalField.value) || 0) + received;
    this.getField("receivedMaterial2").value = "";
}

/* ======================================== */

// Add received material for Material 3
var received = parseFloat(this.getField("receivedMaterial3").value) || 0;
var totalField = this.getField("totalMaterial3");
if (received !== 0) {
    totalField.value = (parseFloat(totalField.value) || 0) + received;
    this.getField("receivedMaterial3").value = "";
}

/* ======================================== */

// Add received material for Material 4
var received = parseFloat(this.getField("receivedMaterial4").value) || 0;
var totalField = this.getField("totalMaterial4");
if (received !== 0) {
    totalField.value = (parseFloat(totalField.value) || 0) + received;
    this.getField("receivedMaterial4").value = "";
}

/* ======================================== */


// ------ JS For Subtracting Used Materials ------

// Subtract used material for Material 1
var used = parseFloat(this.getField("usedMaterial1").value) || 0;
var totalField = this.getField("totalMaterial1");
if (used !== 0) {
    totalField.value = (parseFloat(totalField.value) || 0) - used;
    this.getField("usedMaterial1").value = "";
}

/* ======================================== */

// Subtract used material for Material 2
var used = parseFloat(this.getField("usedMaterial2").value) || 0;
var totalField = this.getField("totalMaterial2");
if (used !== 0) {
    totalField.value = (parseFloat(totalField.value) || 0) - used;
    this.getField("usedMaterial2").value = "";
}

/* ======================================== */

// Subtract used material for Material 3
var used = parseFloat(this.getField("usedMaterial3").value) || 0;
var totalField = this.getField("totalMaterial3");
if (used !== 0) {
    totalField.value = (parseFloat(totalField.value) || 0) - used;
    this.getField("usedMaterial3").value = "";
}

/* ======================================== */

// Subtract used material for Material 4
var used = parseFloat(this.getField("usedMaterial4").value) || 0;
var totalField = this.getField("totalMaterial4");
if (used !== 0) {
    totalField.value = (parseFloat(totalField.value) || 0) - used;
    this.getField("usedMaterial4").value = "";
}