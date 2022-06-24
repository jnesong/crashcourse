/*

Crash Course Computer Science

VIII Instructions & Programs
- CPU is a piece of hardware controlled by easy to modify software
- Jumps create loops
- Halts are conditionals that exit the jumps (e.g. jump_negatives, jump_if_equal, jump_if_greater)
- Modern CPUs have 1) 32 or 64 bits instruction lengths and 2) variable length instructions to create more options for instructions
- Intel 4004 processor - 46 instructions
- Modern computers have thousands of different instructions and instruction variants 

IX Advanced CPU Designs 
- How do we get data in and out of the CPU quickly?
- RAM is a memory module outside of the CPU, so data has to be transmitted along data wires called a bus, which loads from RAM, and takes time
- One solution: Cache (kilo to megabytes, RAM is gigabytes) stores data blocks in the CPU, no extra bus or load back and forth. 
- Cache Hit = data requested in RAM already stored in Cache
- Cache Miss = data not in Cache, still in RAM
- Cache can also be used as a scratch space to hold intermediate values in a long calculation. 
- Dirty bit - special cache flag, keeps track of cache changes that need to be saved in RAM
- Parallelize - when one instruction is getting executed, another instruction could be decoded, while yet another is being fetched all at the same time, decreasing clock cycles/time. 
    - Hazard: dependency in the instructions, aka using something that’s old 
    - Pipeline processors have to look ahead for data dependencies, and if necessary, stall pipelines to avoid problems
    - Out of order execution: high end processors can dynamically reorder instructions to keep the pipeline moving. These circuits are very complicated but very effective. 
    - Hazard: Conditional jump instructions, delays while waiting for values to be finalized
    - Speculative execution: CPU guesses which direction and work off that guess 
        - Branch predictions guess with over 90% accuracy
- Superscalar processes allow for more than one instruction per clock cycle
- Multi-core processors: multiple independent processing units inside a single CPU chip
- Share caches and other resources to work together
- High end computers (like datacenter computers) have multi-core processors and multi-CPUs
- Super computers are for monster calculations - in 2017 the Sunway TaiHuLight contains 40,960 CPUs each with 256 cores
- Conclusion: computer processors have gotten both faster and more sophisticated, employing tricks to squeeze out more computations per clock cycle. 

X Early Programming
- Many consider Jacquard’s textile loom to be one of the earliest forms of programing
- Punched cards turned out to be a cheap, reliable and fairly human-readable way to store data
- But early tabulating (punch card) machines are not truly computers as they can only do one thing, their operation was fixed and not programmable
- Later tabulating machines had control panels/plugboards which required rewiring each time a different program needed to be run >> led to swappable boards
    - Plugboard are complicated to program, could take 3 weeks
- Eniac 1946 : world’s first general purpose electronic computer
- Late 1940s to 50s, stored-program computers allowed programs to be stored entirely in a computer’s memory rather than on plugboards
- Von Neumann Architecture - unifying programming data into a single shared memory
    - Baby 1948, very first Von Neumann stored-program computer
    - Punch cards were still used to load memory
    - 62,500 punch cards == 5 megabytes data
    - Punch paper tape >> hard drives >> CDs
- 1950s-60s Panel programming - switches and buttons instead of plugs
    - Altair 8800 Computer
    - Professionals or technology enthusiasts who understood the hardware 



XVII Integrate Circuits & Moore’s Law
- 1940s-1960s, every computer was built of discrete components
    - Tyranny of numbers
- 1950s, transistors became commercially available (smaller, faster, more reliable than vacuum tubes). Inside the computers were still a tangle of wires.
- 1958 Jack Kilby demonstrated integrated circuits (ICs), many components in one
- 1959 Robert Nyce used silicon to create ICs, father of modern ICs
- ICs are legos for computer engineers, still must be wired together
- PCBs (printed circuit boards), can be mass manufactured with all wires etched in to connect ICs together. Also smaller, cheaper, more reliable.
- Photolithography - uses light to transfer complex patterns to a material, like a semiconductor.
    - Used to create complex circuits
    - Making transistors 1) silicon wafer base 2) oxide layer - protective coating 3) photoresist - when exposed to light, the chemical becomes soluble 4) photomask - pattern to be transferred onto the wafer 5) light 6) using acid/other chemicals areas can be washed away to create conduction paths 7) doping - high temperature gas like phosphorus 8) another oxide layer 9) another photoresist 10) another photomask 11) light 12) chemical wash 13) dope that converts silicon into a different form…. Timing is very important. >> channels (repeat photo resist and mask), metalization, photoresist, photomask, light, chemical wash
- Silicon is a semiconductor - a material that can sometimes conduct electricity and other times not, also abundant (¼ of the earth’s crust), stable/reliable
- 1965 Gordon Moore - Moore’s Law refers to the trend that approximately every 2 years, thanks to advances in materials and manufacturing, you could fit twice the number of transistors into the same amount of space.
- IC prices also decreased dramatically, smaller transistors also saves power and results in faster clock speeds
- 1968, Gordon Moore and Robery Noyce founded a company - Intel - the largest chip maker today. 
- Intel 4004 was released in 1971 - the first microprocessor, contained 2,300 transistors
- By 2006, one IC contained one billion transistors. Today 60 billion are packed into a chip. 
- Starting in the 1970s, very-large-scale-integration, or VLSI software, had been used to automatically generate chip designs instead. Marks the 4th gen of computers. 
- We are now hitting two limitations (as of june 2017) - 1) how fine photomask features can be 2) quantum tunneling - when electrons can jump the gap causing transistor leaks

*/