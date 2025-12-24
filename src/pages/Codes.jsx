export default function Codes() {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Code Examples</h2>

      {/* GO TEST */}
      <h4>Golang – Testing Example</h4>
      <pre>
        <code>{`package mathutils

import "testing"

func Add(a, b int) int {
    return a + b
}

func TestAdd(t *testing.T) {
    result := Add(2, 3)
    if result != 5 {
        t.Errorf("Expected 5, got %d", result)
    }
}
`}</code>
      </pre>

      {/* PYTHON UNITTEST */}
      <h4>Python – unittest Example</h4>
      <pre>
        <code>{`import unittest

def multiply(a, b):
    return a * b

class TestMath(unittest.TestCase):

    def test_multiply(self):
        self.assertEqual(multiply(3, 4), 12)

if __name__ == "__main__":
    unittest.main()
`}</code>
      </pre>

      {/* JAVA EXECUTOR SERVICE */}
      <h4>Java – ExecutorService Example</h4>
      <pre>
        <code>{`import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class Main {
    public static void main(String[] args) {
        ExecutorService executor = Executors.newFixedThreadPool(2);

        executor.submit(() -> {
            System.out.println("Task 1 running");
        });

        executor.submit(() -> {
            System.out.println("Task 2 running");
        });

        executor.shutdown();
    }
}
`}</code>
      </pre>

      {/* LINUX GREP */}
      <h4>Linux – grep Example</h4>
      <pre>
        <code>{`# Search for the word "error" in a log file
grep "error" app.log

# Case-insensitive search
grep -i "warning" app.log
`}</code>
      </pre>

      {/* LINUX AWK */}
      <h4>Linux – awk Example</h4>
      <pre>
        <code>{`# Print second column from a file
awk '{print $2}' data.txt

# Sum values in column 3
awk '{sum += $3} END {print sum}' data.txt
`}</code>
      </pre>

      {/* PRINT EXAMPLES */}
      <h4>Print Examples</h4>
      <pre>
        <code>{`// JavaScript
console.log("Hello UBI_SOFT");

// Python
print("Hello UBI_SOFT")

// Go
fmt.Println("Hello UBI_SOFT")
`}</code>
      </pre>
    </section>
  );
}
