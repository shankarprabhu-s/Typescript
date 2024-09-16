//! for some of the classes sometimes we have to create only one instance
//! in such situation we can turn constructor to private constructor
//! this way is called the singletons

class Singleton {
    // Static property to hold the single instance
    private static instance: Singleton;

    // Private constructor to prevent direct instantiation
    private constructor() {
        console.log("Singleton instance created!");
    }

    // Static method to provide access to the single instance
    public static getInstance(): Singleton {
        // Create a new instance only if it doesn't already exist
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    // Example method
    public showMessage(): void {
        console.log("Hello from the Singleton instance!");
    }
}

// Example usage:

// Attempting to get the single instance of the class
const singleton1 = Singleton.getInstance();
singleton1.showMessage();  // Output: Hello from the Singleton instance!

// Attempting to get the instance again
const singleton2 = Singleton.getInstance();
singleton2.showMessage();  // Output: Hello from the Singleton instance!

// Verify that both variables point to the same instance
console.log(singleton1 === singleton2);  // Output: true
