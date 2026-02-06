# JavaScript Advanced - Concepts Techniques Avancés

## 🔧 Concepts Fondamentaux Implémentés

### 1. **Lexical Scoping** - Portée Lexicale
```javascript
// 0-welcome.js - Accès aux variables par portée lexicale
function welcome(firstName, lastName) {
    const fullName = firstName + " " + lastName;
    
    function displayFullName() {
        alert("Welcome " + fullName + "!"); // Accès à fullName via lexical scope
    }
    displayFullName();
}
// fullName n'est PAS accessible globalement → ReferenceError
```
**Méthode de base :** Les fonctions internes ont accès aux variables de leur portée parente.

### 2. **Closure Scope Chain** - Chaîne de Portée
```javascript
// 1-nested_functions.js - 3 niveaux de closures
const globalVariable = "Welcome";

function outer() {
    const course = "Holberton";           // Niveau 2
    
    function inner() {
        const exclamation = "!";          // Niveau 3
        
        function inception() {
            // Accès aux 3 niveaux : globalVariable + course + exclamation
            alert(globalVariable + " " + course + exclamation);
        }
        inception();
    }
    inner();
}
```
**Méthode de base :** `[[Scope]]` chain - chaque fonction garde une référence vers sa portée externe.

### 3. **Closures Factory Pattern**
```javascript
// 2-function_me.js - Fabrique de fonctions
function welcomeMessage(fullName) {
    return function() {  // Closure qui "capture" fullName
        alert("Welcome " + fullName);
    };
}

const guillaume = welcomeMessage("Guillaume"); // Closure avec fullName = "Guillaume"
const alex = welcomeMessage("Alex");           // Closure avec fullName = "Alex"
```
**Méthode de base :** Chaque appel crée un nouvel environnement lexical avec sa propre copie des variables.

### 4. **Closures + Loops (Variable Capture)**
```javascript
// 3-classrooms.js - Piège classique des boucles
function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
        return function() {
            return seat; // Capture de la valeur de 'seat' au moment de l'appel
        };
    }
    
    const students = [];
    for (let i = 0; i < numbersOfStudents; i++) {
        students.push(studentSeat(i + 1)); // Nouvelle closure à chaque itération
    }
    return students;
}
```
**Méthode de base :** Utiliser `let` dans les boucles ou passer les variables en paramètres pour éviter la capture tardive.

### 5. **Higher-Order Functions avec Closures**
```javascript
// 4-math.js - Configuration de fonctions
function addBy(firstNumber) {
    return function(secondNumber) {
        return firstNumber + secondNumber; // firstNumber "configuré"
    };
}

const addBy100 = addBy(100); // Fonction préconfigurée
addBy100(20); // → 120
```
**Méthode de base :** Les closures permettent la programmation fonctionnelle et la configuration de fonctions.

### 6. **DOM Manipulation avec Closures**
```javascript
// 5-mode.js - Event handlers avec état capturé
function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = size + "px";
        document.body.style.fontWeight = weight;
        // Variables capturées utilisées dans le handler
    };
}

const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
button.addEventListener("click", spooky); // Closure comme callback
```
**Méthodes de base DOM :**
- `document.createElement()` - Créer éléments
- `element.addEventListener()` - Attacher événements
- `element.style.property` - Modifier styles CSS

### 7. **Module Pattern (Méthodes Privées)**
```javascript
// 6-hogwarts.js - Simulation de classes avec privés
function studentHogwarts() {
    let privateScore = 0;  // Variable privée
    let name = null;       // Variable privée
    
    function changeScoreBy(points) { // Méthode privée
        privateScore += points;
    }
    
    return {               // Interface publique
        setName: function(newName) { name = newName; },
        rewardStudent: function() { changeScoreBy(1); },
        getScore: function() { return name + ": " + privateScore; }
    };
}
```
**Méthode de base :** Retourner un objet avec méthodes publiques qui accèdent aux variables privées via closure.

### 8. **Call Stack vs Event Loop**
```javascript
// 7-timeout.js - Ordre d'exécution asynchrone
console.log("Start");           // 1. Call Stack
setTimeout(() => {              // 4. Event Queue → Call Stack (quand vide)
    console.log("Timeout");
}, 0);
console.log("End");             // 2. Call Stack
// Output: Start → End → Timeout
```
**Méthodes de base de l'Event Loop :**
- **Call Stack :** Exécution synchrone LIFO
- **Web APIs :** `setTimeout`, `XMLHttpRequest`, DOM events
- **Event Queue :** File d'attente des callbacks
- **Event Loop :** Transfère queue → stack quand stack vide

### 9. **Performance API - Mesures Haute Précision**
```javascript
// 9-prime.js - Benchmark de fonctions
const start = performance.now();
countPrimeNumbers();
const end = performance.now();
console.log(`Execution time: ${end - start} milliseconds`);
```
**Méthodes Performance API :**
- `performance.now()` - Timestamp haute résolution
- `performance.mark()` - Marqueurs nommés
- `performance.measure()` - Mesures entre marqueurs

### 10. **Binding et Contexte (`this`)**
```javascript
// 12-room_area.js - Liaison explicite du contexte
const roomDimensions = {
    width: 50,
    length: 100,
    getArea: function() {
        return this.width * this.length; // 'this' référence l'objet
    }
};

const boundGetArea = roomDimensions.getArea.bind(roomDimensions);
// boundGetArea() fonctionne même hors contexte original
```
**Méthodes de binding :**
- `.bind(context)` - Lie définitivement le contexte
- `.call(context, ...args)` - Appel immédiat avec contexte
- `.apply(context, [args])` - Appel immédiat avec tableau d'arguments

### 11. **XMLHttpRequest et Callbacks**
```javascript
// 14-wikipedia.js - Requête Ajax asynchrone
function queryWikipedia(callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            callback(response.query.pages[pageId].extract);
        }
    };
    xhr.send();
}
```
**XMLHttpRequest States :**
- `0 UNSENT` - Client créé, `open()` pas appelé
- `1 OPENED` - `open()` appelé
- `2 HEADERS_RECEIVED` - Headers reçus
- `3 LOADING` - Corps de réponse en cours de réception
- `4 DONE` - Opération terminée

## 🧠 **Algorithmes et Structures de Données Utilisés**

### **Algorithme de Crible pour Nombres Premiers**
```javascript
// 9-prime.js - Optimisation avec √n
function countPrimeNumbers() {
    let count = 0;
    for (let num = 2; num <= 100; num++) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) { // Optimisation O(√n)
            if (num % i === 0) {
                isPrime = false;
                break; // Early termination
            }
        }
        if (isPrime) count++;
    }
    return count; // 25 nombres premiers entre 2-100
}
```
**Complexité :** O(n√n) au lieu de O(n²)

### **Memory Management avec Closures**
```javascript
// Risque de memory leak
function createLeak() {
    const largeData = new Array(1000000).fill('data');
    
    return function() {
        // largeData reste en mémoire tant que la closure existe
        console.log('Closure active');
    };
}

// Solution : Nettoyer les références
function createSafe() {
    let largeData = new Array(1000000).fill('data');
    
    return function cleanup() {
        largeData = null; // Libérer la mémoire explicitement
    };
}
```

## 🔧 **Techniques Avancées Appliquées**

### **Debouncing avec Closures**
```javascript
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}
```

### **Memoization Pattern**
```javascript
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        return cache[key] || (cache[key] = fn.apply(this, args));
    };
}
```

### **Module Revealing Pattern**
```javascript
const Calculator = (function() {
    let result = 0;
    
    function add(x) { result += x; }
    function multiply(x) { result *= x; }
    function getResult() { return result; }
    
    return {
        add,
        multiply,
        result: getResult // Exposer une méthode, pas la variable
    };
})();
```

## 📊 **Mesures de Performance Observées**

| Opération | Temps moyen | Optimisation |
|-----------|-------------|--------------|
| Single prime count | 0.05-0.7ms | Algorithme √n |
| 100x prime count | 2-40ms | JIT compilation |
| setTimeout(0) overhead | +4ms | Event Loop cost |

## 🔍 **Debugging et Profiling**

### **Call Stack Analysis**
```javascript
function trace() {
    console.trace(); // Affiche la call stack complète
}

// Performance profiling
console.time('prime-calculation');
countPrimeNumbers();
console.timeEnd('prime-calculation');
```

### **Memory Profiling**
```javascript
// Mesurer l'usage mémoire
const used = process.memoryUsage();
console.log(`Heap Used: ${Math.round(used.heapUsed / 1024 / 1024 * 100) / 100} MB`);
```

## 💡 **Design Patterns Implémentés**

1. **Factory Pattern** (2-function_me.js) - Création d'objets similaires
2. **Module Pattern** (6-hogwarts.js) - Encapsulation avec privé/public
3. **Observer Pattern** (5-mode.js) - Event handling avec closures
4. **Strategy Pattern** (4-math.js) - Algorithmes interchangeables
5. **Command Pattern** (14-wikipedia.js) - Callbacks comme commandes

## 🚀 **Optimisations Moteur JavaScript**

### **JIT Compilation Effects**
- **Cold start:** Premier appel lent (interprétation)
- **Warm up:** Compilation après plusieurs appels
- **Hot code:** Optimisations agressives pour code fréquent

### **Garbage Collection**
- **Mark & Sweep:** Nettoyage automatique des objets non référencés
- **Generational GC:** Objets courts vs longs (young/old generation)
- **Closures:** Attention aux références circulaires

---

## 🛠️ **Technologies et APIs Utilisées**

- **ES6+ Features:** `let/const`, arrow functions, template literals
- **Web APIs:** Performance API, DOM API, XMLHttpRequest
- **Node.js Runtime:** V8 engine, Event Loop, Process object
- **Development Tools:** Console API, profiling methods

**Auteur :** Mattieu Mouroux - Holberton School  
**Niveau :** Intermédiaire à Avancé  
**Prérequis :** JavaScript ES6, DOM basics, Asynchrone concepts