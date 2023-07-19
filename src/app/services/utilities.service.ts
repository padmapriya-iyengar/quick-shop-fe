import { Injectable } from '@angular/core';
import * as _ from 'lodash'
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor(private message: MessageService) { }

  public isEmpty(reqString: string): boolean {
    reqString = _.trim(reqString);
    if(reqString === '' || reqString == null || reqString.length == 0){
        return true;
    }
    return false;
  }
  public alert(severity: string, summary: string, detail: string, sticky: boolean){
    this.message.clear();
    this.message.add({ severity: severity, summary: summary, detail: detail, sticky: sticky });
  }
}
