import {CanDeactivate} from '@angular/router';
import { ProjectDetailsComponent } from './projectdetails';

export class Goaway implements CanDeactivate<ProjectDetailsComponent> {
  // @ts-ignore
  canDeactivate(component: ProjectDetailsComponent) {

    return window.confirm('你还没有保存呢');
  }

}