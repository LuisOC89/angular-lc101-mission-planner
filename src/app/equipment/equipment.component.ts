import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipmentPieceBeingEdited: string = null;
  equipment: string[] = [
    'Habitat dome',
    'Drones',
    'Food containers',
    'Oxygen tanks'
  ];
  constructor() { }

  ngOnInit() {
  }

  add(equipmentPiece: string) {
    this.equipment.push(equipmentPiece);
  }

  remove(equipmentPiece: string) {
    let index = this.equipment.indexOf(equipmentPiece);
    this.equipment.splice(index, 1);
  }

  edit(equipmentPiece: string) {
    this.equipmentPieceBeingEdited = equipmentPiece;
  }

  save(newEquipmentPiece: string, equipmentPiece: string) {
    let index = this.equipment.indexOf(equipmentPiece);
    this.equipment[index] = newEquipmentPiece;
    this.equipmentPieceBeingEdited = null;
  }
}
