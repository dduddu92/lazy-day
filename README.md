# Lazy Day (Shopping Mall using Firebase & React Query)

## π νλ‘μ νΈ μ λ³΄

1. νλ‘μ νΈ λͺ : Lazy Day
2. νλ‘μ νΈ κΈ°κ° : 2023. 1.5 ~ 2023. 1.17
3. νλ‘μ νΈ μΈμ: λ¨λ μ§ν νλ‘μ νΈ

<br />

---

## π μ€ν λ°©λ²

```
$ git clone https://github.com/dduddu92/lazy-day.git
$ cd lazy-day
$ yarn install
$ yarn start
```

<br/>

---

## π λ°°ν¬ λ§ν¬

<br/>

> https://lazy-day-dduddu92.vercel.app/

<br/>

---

## π κΈ°μ μ€ν

<br/>

![react](https://img.shields.io/badge/react-18.2.0-61DAFB?logo=react)
![react-query](https://img.shields.io/badge/react--query-4.22.0-FF4154?logo=react-query)
![react-router-dom](https://img.shields.io/badge/react--router--dom-6.6.1-blue?logo=react-router)  
![firebase](https://img.shields.io/badge/firebase-9.15.0-E1C537?logo=firebase)
![tailwind-css](https://img.shields.io/badge/tailwind--css-3.2.4-06B6D4?logo=tailwind-css)

- **μ μ  μ΄μ **

  - _Tailwind Css_
    - Utility-First μ»¨μμ κ°μ§ CSS νλ μμν¬. (λ―Έλ¦¬ μΈνλ μ νΈλ¦¬ν° ν΄λμ€λ₯Ό νμ©νμ¬ HTML μ½λ λ΄μμ μ€νμΌλ§ν¨) Utility-First λμ μ½κ³  λΉ λ₯΄κ² μνλ λμμΈμ κ°λ°ν  μ μλ€λ μ₯μ μ΄ μμ.
    - styleμ μν μ½λλ HTML μ½λ μμ μμΌλ―λ‘, HTMLμ CSS νμΌμ λ³λλ‘ κ΄λ¦¬ν  νμκ° μλ€λ μ₯μ μ΄ μ‘΄μ¬ν¨.
    - κ·Έλ¬λ μ΄λ°μλ μ€νμΌμ ν΄λμ€λͺμ μ΅νμΌ νλ κ³Όμ μ΄ νμνλ―λ‘, κ°λ°νλ λ΄λ΄ λ¬Έμλ₯Ό μ°Έκ³ ν΄μΌ νλ λ²κ±°λ‘μμ΄ μλ€.
  - _Firebase RealTime DataBase_
    - νλ‘ νΈμλ λ¨λ μ§ν νλ‘μ νΈμ΄λ―λ‘ λ°±μλλ₯Ό λμ νμ¬ μν λ¦¬μ€νΈ λ° κ²μκΈμ μ μ₯ν  λ°μ΄ν° κ΅¬μΆμ νμ©νκΈ° μν¨.
    - κ΅¬κΈ μμ λ‘κ·ΈμΈ APIλ₯Ό μ§μν¨.
    - DBλ₯Ό μμ²΄μ μΌλ‘ μμ λ‘­κ² κ΅¬μΆν  μ μμΌλ―λ‘ κ°μΈ νλ‘μ νΈμ μ¬μ©νκΈ° μ©μ΄νλ€κ³  νλ¨νμμ.
  - _React-Router-Dom_

    - Reactμ SPA(Single Page Application)νΉμ±μ νλμ νμ΄μ§μμ λͺ¨λ  λ λλ§μ΄ μ΄λ£¨μ΄μ§λ€.
    - ν΄λΌμ΄μΈνΈ μΈ‘ λΌμ°ν(Client side routing)μ μ¬μ©νλ©΄ μλ²μμ λ€λ₯Έ λ¬Έμλ₯Ό μμ²­νμ§ μκ³ λ λ§ν¬ ν΄λ¦­μ ν΅ν΄ URLμ μλ°μ΄νΈ ν  μ μλ€.
    - λΈλΌμ°μ κ° μμ ν μλ‘μ΄ λ¬Έμλ₯Ό μμ²­νκ±°λ λ€μ νμ΄μ§λ₯Ό μν΄ CSSμ μλ°μ€ν¬λ¦½νΈλ₯Ό λ€μ νκ°ν  νμκ° μκΈ° λλ¬Έμ λ λΉ λ₯Έ μ¬μ©μ κ²½νμ΄ κ°λ₯ν¨.

  - _TanStack Query (React-Query)_

    - React Applicationμμ μλ² μνλ₯Ό λΆλ¬μ€κ³ , μΊμ±νλ©°, μ§μμ μΌλ‘ λκΈ°ννκ³  μλ°μ΄νΈνλ μμμ λμμ£Όλ λΌμ΄λΈλ¬λ¦¬
    - Client μν μμκ³Ό Server μν μμμ λΆλ¦¬ν  μ μλ€.
    - μΌνλͺ°μ νΉμ± μ clientμμ κ΄λ¦¬νλ λ°μ΄ν°λ³΄λ€ μλ²μμ κ΄λ¦¬νλ λ°μ΄ν°κ° λ λ§κΈ° λλ¬Έμ μ¬μ©μ μ ν©νλ€κ³  νλ¨λμμ.

<br />

---

## π κ΅¬ν κΈ°λ₯

1. Firebaseλ₯Ό μ΄μ©ν κ΅¬κΈ μμ λ‘κ·ΈμΈ κΈ°λ₯ κ΅¬ν

- λ‘κ·ΈμΈ & λ‘κ·Έμμ

  - `firebase`μμ μ κ³΅νλ `signInWithPopup` λ©μλλ₯Ό μ΄μ©νμ¬ κ΅¬ν.
  - firebase.js νμΌμ login ν¨μλ₯Ό λ§λ€μ΄ μ¬μ©.

  ```js
  export function login() {
    signInWithPopup(auth, provider).catch(console.error);
  }
  ```

  - λ‘κ·Έμμμ `firebase`μμ μ κ³΅νλ `signOut()`μΌλ‘ λ‘κ·Έμμ μ²λ¦¬.

  ```js
  export function logout() {
    signOut(auth);
  }
  ```

2. μν λ±λ‘νκΈ°(Admin Userλ§ κ°λ₯)

- `RealTime DateBase`μ `set()`μ μ΄μ©νμ¬ μν λ±λ‘

```js
export async function addNewProduct(product, image) {
  const id = uuid();
  return set(ref(database, `products/${id}`), {
    ...product,
    id,
    price: parseInt(product.price),
    image,
    options: product.options.split(','),
  });
}
```

3. μν λΆλ¬μ€κΈ°

- `RealTime DateBase`μ `get()`μ μ¬μ©νμ¬ νΈμΆ.
- μΆν infinite scroll μ μ© μμ 

```js
export async function getProducts() {
  const firstQuery = query(ref(database, 'products'), limitToFirst(20));
  return get(firstQuery).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  });
}
```

4. μ₯λ°κ΅¬λ λͺ©λ‘ λΆλ¬μ€κΈ°, μλ μΆκ° λ° μμ  νκΈ°, μΉ΄νΈ λͺ©λ‘μμ μ­μ νκΈ°

- `get()`λ©μλλ₯Ό μ΄μ©νμ¬ μΉ΄νΈ μ λ³΄λ₯Ό λΆλ¬μ΄.
- `set()`λ©μλλ₯Ό μ΄μ©νμ¬ νμ¬ λ‘κ·ΈμΈν μ μ μ uidμ μνμ΄ κ°μ§ κ³ μ  idλ₯Ό μ΄μ©νμ¬ μλμ μΆκ°νκ±°λ μλ°μ΄νΈ ν  μ μκ² νμμ.
- μΉ΄νΈ λͺ©λ‘μμ μν μ­μ λ `remove()`λ©μλλ‘ κ΅¬ν.

```js
export async function getCart(userId) {
  return get(ref(database, `carts/${userId}`)).then((snapshot) => {
    const items = snapshot.val() || {};
    return Object.values(items);
  });
}

export async function addOrUpdateToCart(userId, product) {
  return set(ref(database, `carts/${userId}/${product.id}`), product);
}

export async function removeFromCart(userId, productId) {
  return remove(ref(database, `carts/${userId}/${productId}`));
}
```

5. κ²μκΈ μμ±νκΈ°

- κ²μκΈ μμ±λ μν λ±λ‘κ³Ό λ§μ°¬κ°μ§κ° `set()`λ©μλλ₯Ό μ΄μ©νλκ±΄ λμΌ.
- databaseμ μ μ₯λλ κ΅¬μ‘°λ μλμ κ°λ€.
- μ΅μ μμΌλ‘ μ λ ¬νκΈ° μν΄ timeStampλ ν¨κ» μ μ₯.

```js
export async function addNewQuestion(text, image, user) {
  const id = uuid();
  return set(ref(database, `questions/${id}`), {
    ...text,
    id,
    image,
    displayName: user.displayName,
    photoURL: user.photoURL,
    uid: user.uid,
    title: text.title,
    question: text.question,
    timeStamp: Date.now(),
    createdAt: new Date().toLocaleString(),
    like: 0,
    visitor: 0,
  });
}
```

- μ¬μ©μκ° μλ ₯ν κ°μ `handleChange()`λ‘ κ΄λ¦¬, `text`μ `file`μ `state`λ λΆλ¦¬νμ¬ κ΄λ¦¬.

```js
const handleChange = (e) => {
  const { name, value, files } = e.target;
  if (name === 'file') {
    setFile(files && files[0]);
    return;
  }
  setText((text) => ({
    ...text,
    [name]: value,
  }));
};
```

6. κ²μκΈ λΆλ¬μ€κΈ°

- `get()`λ©μλλ₯Ό μ΄μ©νμ¬ κ²μκΈμ λΆλ¬μ΄.

```js
export async function getQuestions() {
  return get(ref(database, 'questions')).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  });
}
```

7. κ²μκΈ μμ νκΈ°

- μ²μμλ κ²μκΈ μμ±κ³Ό μμ μ νλμ ν¨μλ‘ κ΄λ¦¬νλ €κ³  νμμΌλ, μ²μ κ²μκΈμ΄ μμ±λ λ μ§λ λ³νλ©΄ μλλ―λ‘, addμ updateλ₯Ό λΆλ¦¬.
- μμ λ λ μ§ λ° μκ°μ μ μ μλλ‘, `updatedAt`λ μΆκ°.

```js
export async function updateQuestion(text, image, user) {
  return set(ref(database, `questions/${text.id}`), {
    ...text,
    image,
    displayName: user.displayName,
    photoURL: user.photoURL,
    uid: user.uid,
    title: text.title,
    question: text.question,
    updatedAt: new Date().toLocaleString(),
  });
}
```

8. κ²μκΈ μ­μ νκΈ°

- λ§μ°¬κ°μ§λ‘ κ°λ¨νκ² `remove()`λ©μλλ₯Ό μ΄μ©νμ¬ κ²μκΈμ κ³ μ  idλ₯Ό μ΄μ©ν΄ κ²μκΈμ μ­μ .

```js
export async function removeQuestion(questionId) {
  return remove(ref(database, `questions/${questionId}`));
}
```

<br/>

---

## π κ΅¬ν μμ 

- [ ] κ²μκΈ μ’μμ λ° μ‘°νμ κ΅¬ν
- [ ] κ²μκΈ λκΈ κΈ°λ₯
- [ ] Homeμ λ±λ‘λ μνλ€ μΉ΄νκ³ λ¦¬ λ³ λΆλ₯ μμ
- [ ] μν λ¦¬μ€νΈ : λ¬΄ν μ€ν¬λ‘€
- [ ] κ²μν : νμ΄μ§ λ€μ΄μ
