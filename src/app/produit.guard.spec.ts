import { TestBed } from '@angular/core/testing';
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ProduitGuard } from './produit.guard';

describe('ProduitGuard', () => {
  let guard: ProduitGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProduitGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true for admin user', () => {
    const fakeRoute: ActivatedRouteSnapshot = {} as any;
    const fakeState: RouterStateSnapshot = {} as any;
    const canActivateFn: CanActivateFn = guard.canActivate;
    expect(canActivateFn(fakeRoute, fakeState)).toBe(true);
  });
});
