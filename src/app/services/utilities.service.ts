import { Injectable } from '@angular/core';
import * as _ from 'lodash'
import { MessageService } from 'primeng/api';

/**
 * utility service
 * @export
 * @class UtilitiesService
 * @typedef {UtilitiesService}
 */
@Injectable()

export class UtilitiesService {
  
  /**
   * Creates an instance of UtilitiesService.
   * @constructor
   * @param {MessageService} message
   */
  constructor(private message: MessageService) { }

  /**
   * check if string is empty
   * @public
   * @param {string} reqString
   * @returns {boolean}
   */
  public isEmpty(reqString: string): boolean {
    reqString = _.trim(reqString);
    if(reqString === '' || reqString == null || reqString.length == 0){
        return true;
    }
    return false;
  }
  
  /**
   * display alerts
   * @public
   * @param {string} severity
   * @param {string} summary
   * @param {string} detail
   * @param {boolean} sticky
   */
  public alert(severity: string, summary: string, detail: string, sticky: boolean){
    this.message.clear();
    this.message.add({ severity: severity, summary: summary, detail: detail, sticky: sticky });
  }
}
