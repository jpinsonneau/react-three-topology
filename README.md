# React Three Topology
A 3D network topology viewer based on react-three-fiber (a react renderer for three.js) and drei (useful helpers for react-three-fiber)

This project is borned on the following observations: 
- it is almost impossible to have a good overview of your network
- drawing each connection on a flat representation is hard to read
- it is difficult to understand ownership and relations between objects without a concrete representation

This project is inspired of Building Information Modeling in constructions fields where a single 3D model contains all the items of your project and their related metadas in a single source of truth.

# TODOs
- [X] First implementation with building style view
- [ ] Add testing
- [ ] Allow disposition alternatives
  - [ ] Flat projects rendering (no Node representation)
  - [ ] Geographic rendering (based on geo coordinates)
  - ...
- [ ] Add drag & drop capabilities
- [ ] Optimize rendering

# Contribute
Feel free to open issues, PRs or fork this for your needs. I'm actively looking for contributors on both design and coding sides