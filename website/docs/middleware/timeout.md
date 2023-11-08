---
description: Timeout middleware
---

# Timeout

Timeout middleware is used to timeout at a long running operation within a predefined period.

## Usage

```go
e.Use(middleware.Timeout())
```

## Custom Configuration

### Usage

```go
e := echo.New()
e.Use(middleware.TimeoutWithConfig(middleware.TimeoutConfig{
  Skipper:                     middleware.DefaultSkipper,
  ErrorMessage:                "custom timeout error message returns to client",
  OnTimeoutRouteErrorHandler:  func(err error, c echo.Context) {
    log.Println(c.Path())
  },
  Timeout:                     30*time.Second,
}))
```
`OnTimeoutRouteErrorHandler` is an error handler that is executed for error that was returned from wrapped route after request timeouted and we already had sent the error code (503) and message response to the client.
```go
OnTimeoutRouteErrorHandler func(err error, c echo.Context)
```
Note: do not write headers/body inside this handler. The response has already been sent to the client and response writer
will not accept anything no more. handler in the previous example will log the actual route middleware timeouted.

## Configuration

```go
// TimeoutConfig defines the config for Timeout middleware.
TimeoutConfig struct {
  // Skipper defines a function to skip middleware.
  Skipper Skipper

  // ErrorMessage is written to response on timeout in addition to http.StatusServiceUnavailable (503) status code
  ErrorMessage string

  // OnTimeoutRouteErrorHandler is an error handler that is executed for error that was returned from wrapped route after
  // request timeouted and we already had sent the error code (503) and message response to the client.
  OnTimeoutRouteErrorHandler func(err error, c echo.Context)

  // Timeout configures a timeout for the middleware, defaults to 0 for no timeout
  Timeout time.Duration
}
```


### Default Configuration*

```go
// DefaultTimeoutConfig is the default Timeout middleware config.
DefaultTimeoutConfig = TimeoutConfig{
  Skipper:      DefaultSkipper,
  Timeout:      0,
  ErrorMessage: "",
  // Note that OnTimeoutRouteErrorHandler will be nil
}
```
