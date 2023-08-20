import { Notify } from 'notiflix';

function createPromise(position, delay) {
  const promise = new Promise((result, reject) => {
    const shouldResolve = Math.random() > 0.3;
   setTimeOut (() => {
    if (shouldResolve) {
      result ({position, delay})
    } else {
      reject ({position, delay})
    }
  }, delay)
   });
   return promise;
} 

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  let delay = Number(e.currentTarget.delay.value);
  const step = Number(e.currentTarget.step.value);
  const amount = Number(e.currentTarget.amount.value);
  for (let i = 1 ; i <= amount ; i += 1) {
    createPromise(i, delay).then(onSucces).catch(onError);
    delay += step;
  }
}

function onSucces ({position, delay}) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}

function onError ({position, delay}) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}