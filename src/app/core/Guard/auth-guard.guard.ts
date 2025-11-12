import { CanActivateFn } from '@angular/router';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {

  const _PLATFORM_ID=inject(PLATFORM_ID);

  const _router= inject(Router);
  if(isPlatformBrowser(_PLATFORM_ID))
  {
    if(localStorage.getItem('UserToken'))
    {
      return true;
    }
    else
    {
      _router.navigate(['/login'])
      return false;
    }
  }
  return false;
};
