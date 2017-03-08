export class TokenModel {
  id: string = null;
  ttl: number = null;
  created: string = null;
  userId: string = null;
  
  constructor(obj?) {
    for (let field in obj) {
      if (typeof this[field] !== 'undefined') {
        this[field] = obj[field];
      }
    }
  }
}