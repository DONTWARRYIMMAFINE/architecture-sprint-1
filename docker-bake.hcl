target "backend" {
  cache-to = [
    "type=gha,ignore-error=true,mode=max,scope=backend"
  ]
  cache-from = [
    "type=gha,scope=backend"
  ]
}

// target "frontend/ui-microfrontend" {
//   context = "./frontend/ui-microfrontend"
//   dockerfile = "Dockerfile"
//   cache-to = ["type=gha,ignore-error=true,mode=max,scope=ui"]
//   cache-from = ["type=gha,scope=ui"]
// }
//
// target "frontend/profile-microfrontend" {
//   context = "./frontend/profile-microfrontend"
//   dockerfile = "Dockerfile"
//   cache-to = ["type=gha,ignore-error=true,mode=max,scope=profile"]
//   cache-from = ["type=gha,scope=profile"]
// }
//
// target "frontend/card-microfrontend" {
//   context = "./frontend/card-microfrontend"
//   dockerfile = "Dockerfile"
//   cache-to = ["type=gha,ignore-error=true,mode=max,scope=card"]
//   cache-from = ["type=gha,scope=card"]
// }
//
// target "frontend/host-microfrontend" {
//   context = "./frontend/host-microfrontend"
//   dockerfile = "Dockerfile"
//   cache-to = ["type=gha,ignore-error=true,mode=max,scope=host"]
//   cache-from = ["type=gha,scope=host"]
// }
