/* ========================================
   ======= ACTIONS - RUN JAVASCRIPT =======
   =======code used in pdf document======== 
   ======================================== */


   // ------ JS For Received Materials ------


// Get values from the received and used fields for Material 1
var received = this.getField("receivedMaterial1").valueAsNumber || 0;
var used = this.getField("usedMaterial1").valueAsNumber || 0;

// Calculate the total for Material 1
var total = received - used;

// Update the total field for Material 1
this.getField("totalMaterial1").value = total;


/* ======================================== */


// Get values from the received and used fields for Material 2
var received = this.getField("receivedMaterial2").valueAsNumber || 0;
var used = this.getField("usedMaterial2").valueAsNumber || 0;

// Calculate the total for Material 2
var total = received - used;

//Update the total field for Material 2
this.getField("totalMaterial2").value = total;


/* ======================================== */

