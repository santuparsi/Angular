import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from './note';

@Injectable()
export class NotesService {

  getNotes(): Observable<Array<Note>> {
return null;
  }

  addNote(note: Note): Observable<Note> {
return null;
  }

}
