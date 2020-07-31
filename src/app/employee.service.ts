import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Employee } from './employee';
import { MessageService } from './message.service';


@Injectable({ providedIn: 'root' })
export class EmployeeService {

  //private heroesUrl = 'api/heroes';  // URL to web api
 //private employeesUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=20e4fed8';  // URL to web api
 //private employeesUrl = 'http://rupesh:8080/api/v1/employees';  // URL to web api
 private employeesUrl = 'https://www6c.virtualdoxx.com/boot2-employee-20200705/api/v1/employees/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET heroes from the server */
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Employee[]>('getEmployees', []))
      );
  }

  /** GET employee by id. Return `undefined` when id not found */
  getEmployeeNo404<Data>(id: number): Observable<Employee> {
    const url = `${this.employeesUrl}/?id=${id}`;
    return this.http.get<Employee[]>(url)
      .pipe(
        map(heroes => heroes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} employee id=${id}`);
        }),
        catchError(this.handleError<Employee>(`getEmployee id=${id}`))
      );
  }

  /** GET employee by id. Will 404 if id not found */
  getEmployee(id: number): Observable<Employee> {
    const url = `${this.employeesUrl}/${id}`;
    return this.http.get<Employee>(url).pipe(
      tap(_ => this.log(`fetched employee id=${id}`)),
      catchError(this.handleError<Employee>(`getEmployee id=${id}`))
    );
  }

  /* GET heroes whose name contains search term */
  searchEmployees(term: string): Observable<Employee[]> {
    if (!term.trim()) {
      // if not search term, return empty employee array.
      return of([]);
    }
    return this.http.get<Employee[]>(`${this.employeesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found heroes matching "${term}"`) :
         this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Employee[]>('searchEmployees', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new employee to the server */
  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.employeesUrl, employee, this.httpOptions).pipe(
      tap((newEmployee: Employee) => this.log(`added employee w/ id=${newEmployee.id}`)),
      catchError(this.handleError<Employee>('addEmployee'))
    );
  }

  /** DELETE: delete the employee from the server */
  deleteEmployee(employee: Employee | number): Observable<Employee> {
    const id = typeof employee === 'number' ? employee : employee.id;
    const url = `${this.employeesUrl}/${id}`;

    return this.http.delete<Employee>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted employee id=${id}`)),
      catchError(this.handleError<Employee>('deleteEmployee'))
    );
  }

  /** PUT: update the employee on the server */
  updateEmployee(employee: Employee): Observable<any> {
    return this.http.put(this.employeesUrl, employee, this.httpOptions).pipe(
      tap(_ => this.log(`updated employee id=${employee.id}`)),
      catchError(this.handleError<any>('updateEmployee'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a EmployeeService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`EmployeeService: ${message}`);
  }
}