import React, { Component } from 'react'
import { Provider, observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'
import Switcher from 'switcheroo'

// Atoms
import { ButtonRaisedComponent } from '../atoms/ButtonRaised'
import { BadgesComponent } from '../atoms/Badges'
import { ButtonAddItemComponent } from '../atoms/ButtonAddItem'
import { ButtonCollapseActionComponent } from '../atoms/ButtonCollapseAction'
import { ButtonComActionComponent } from '../atoms/ButtonComAction'
import { ButtonFlatComponent } from '../atoms/ButtonFlat'
import { ButtonIconComponent } from '../atoms/ButtonIcon'
import { CheckboxesComponent } from '../atoms/Checkboxes'
import { RadioSelectorComponent } from '../atoms/RadioSelector'
import { ScrollBarsComponent } from '../atoms/ScrollBars'
import { SlidersComponent } from '../atoms/Sliders'
import { TogglesComponent } from '../atoms/Toggles'
import { TooltipsComponent } from '../atoms/Tooltips'


export class PatternAtoms extends Component {
  render() {
    return (
      <ul>
        <li id="Button_Raised" className="guide-tile"><ButtonRaisedComponent /></li>
        <li id="Button_Add" className="guide-tile"><ButtonAddItemComponent /></li>
        <li id="Button_Collapse" className="guide-tile"><ButtonCollapseActionComponent /></li>
        <li id="Button_Compound" className="guide-tile"><ButtonComActionComponent /></li>
        <li id="Button_Flat" className="guide-tile"><ButtonFlatComponent /></li>
        <li id="Button_Icon" className="guide-tile"><ButtonIconComponent /></li>
        <li id="Checkboxes" className="guide-tile"><CheckboxesComponent /></li>
        <li id="Radio_Selector" className="guide-tile"><RadioSelectorComponent /></li>
        <li id="Sliders" className="guide-tile"><SlidersComponent /></li>
        <li id="Toggles" className="guide-tile"><TogglesComponent /></li>
        <li id="Tool_Tips" className="guide-tile"><TooltipsComponent /></li>
        <li id="Badges" className="guide-tile"><BadgesComponent /></li>
      </ul>
    );
  }
}

export class PatternAllAtoms extends Component {
  render() {
    return (
      <nav>
        <dropdown className="guide-component-dropdown">
          <input id="toggle2" type="checkbox" />
          <label htmlFor="toggle2">Atoms Components</label>
          <div className="dropdown-container">
            <PatternAsideAtoms/>
          </div>
        </dropdown>
        <div className="side-nav-desktop">
          <label><a href="#/pattern/">Back to Components</a></label>
          <PatternAsideAtoms />
        </div>
      </nav>
    );
  }
}

export class PatternAsideAtoms extends Component {
  render() {
    return (
      <ul>
        <li className="seperator">Atoms</li>
        <li><a onClick={() => document.getElementById("Button_Raised").scrollIntoView(true)}>Buttons Raised</a></li>
        <li><a onClick={() => document.getElementById("Button_Add").scrollIntoView(true)}>Button Add</a></li>
        <li><a onClick={() => document.getElementById("Button_Collapse").scrollIntoView(true)}>Button Collapse</a></li>
        <li><a onClick={() => document.getElementById("Button_Compound").scrollIntoView(true)}>Button Compound</a></li>
        <li><a onClick={() => document.getElementById("Button_Flat").scrollIntoView(true)}>Button Flat</a></li>
        <li><a onClick={() => document.getElementById("Button_Icon").scrollIntoView(true)}>Button Icon</a></li>
        <li><a onClick={() => document.getElementById("Checkboxes").scrollIntoView(true)}>Checkboxes</a></li>
        <li><a onClick={() => document.getElementById("Radio_Selector").scrollIntoView(true)}>Radio Selector</a></li>
        <li><a onClick={() => document.getElementById("Sliders").scrollIntoView(true)}>Sliders</a></li>
        <li><a onClick={() => document.getElementById("Toggles").scrollIntoView(true)}>Toggles</a></li>
        <li><a onClick={() => document.getElementById("Tool_Tips").scrollIntoView(true)}>Tool Tips</a></li>
        <li><a onClick={() => document.getElementById("Badges").scrollIntoView(true)}>Badges</a></li>
      </ul>
    );
  }
}