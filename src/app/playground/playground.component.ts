import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'playground',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-primary">Left</button>
      <button type="button" class="btn btn-primary">Middle</button>
      <button type="button" class="btn btn-primary">Right</button>
    </div>
  `
})

export default class PlaygroundComponent implements OnInit{
  ngOnInit() {
    console.log('playground')
  }

}
