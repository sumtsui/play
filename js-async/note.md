## Concurrency

Concurrent tasks do not happened **in parallel**, they happened in sequence.

So, sequence means **time**, which is the most complex state in your application. ---- Kyle Simpson

## Promise

The biggest benefit of `promise` is it uninverse the inversion of control. Instead of letting 3rd party codes call the callbacks for us, we can do whatever we want when a promise is resolved or rejected.

### Promise trust

1. only resolved once
2. either success or error
3. messages passed/kept
4. exceptions become errors
5. immutable once resolved
