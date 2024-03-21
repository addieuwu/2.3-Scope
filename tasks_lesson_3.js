/*
Unit 2 Lesson 3: Basic understanding of scope

Author's Name:
*/


function clients_house() {
    door = 'door locked'
    return door; 
}

function plumber() {
    if (door == 'door locked') door = 'door opened';
    return true;
}

plumber();